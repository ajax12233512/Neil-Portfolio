import React from "react";
import Sketch from "react-p5";
import './Background.css';



// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
	const setup = (p5, canvasParentRef) => {
		// use parent to render the canvas in this ref
		// (without that p5 will render the canvas outside of your component)
		p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef);
	};

    const ellipsesArr = [];

    class Ellipse {
        constructor(x, y){
            this.x = x;
            this.y = y;
            this.xSpeed = 1;
            this.ySpeed = 1;
            this.history = [];
        }

        getX(){
            return this.x;
        }
        getY(){
            return this.y;
        }
        moveX(){
            if(this.x >= window.innerWidth){
                this.xSpeed = -1;
            }
            if(this.x <= 0){
                this.xSpeed = 1;
            }
            this.x += this.xSpeed;
        }
        moveY(){
            if(this.y >= window.innerHeight){
                this.ySpeed = -1;
            }
            if(this.y <= 0){
                this.ySpeed = 1;
            }
            this.y += this.ySpeed;
        }
    }

    for(let k = 0; k < 10; k++){
        let newEllipse = new Ellipse(
            Math.floor(Math.random() * window.innerWidth), 
            Math.floor(Math.random() * window.innerHeight)
        );
        ellipsesArr.push(newEllipse);
    }

    let r = 50;
    let g = 5;
    let b = 5;
    // let t = .4;

    let increment = 1;

	const draw = (p5) => {
        let color = p5.color('hsla(1, 0%, 10%, 1)');
	    p5.background(color);
        


        p5.fill(250);
        ellipsesArr.forEach(ellipse => {
            //Draw circle
            p5.stroke(230 , 20, 230);
            p5.strokeWeight(1);
            p5.fill('rgba(255,255,255, .1)')
            p5.ellipse(ellipse.x, ellipse.y, 70, 70);


            //Move circle 
            ellipse.moveX();
            ellipse.moveY();

            
        })

        if(r >= 100) increment = -.4;
        else if(r <= 0) increment = .4;


        if(g >= 100) increment = -1;
        else if(g <= 0) increment = 1;


        if(b >= 100) increment = -2;
        else if(b <= 0) increment =.2;
  

        r += increment
        b += increment
        g += increment
		// NOTE: Do not use setState in the draw function or in functions that are executed
		// in the draw function...
		// please use normal variables or class properties for these purposes


        //Draw circle around mouse
        const x = p5.mouseX;
        const y = p5.mouseY;

        p5.fill(p5.color('rgba(255, 255, 255, .1)'))
        p5.stroke('rgb(216,191,216)');
        p5.strokeWeight(.1);
        const ourCircle = p5.circle(x, y, 500)
        // ourCircle.style('box-shadow', '1px, 1px, 1px, 1px')
        
        
        

	};

    const windowResized = (p5) => {
        p5.resizeCanvas(window.innerWidth, window.innerHeight);
    }

    

    const mouseClicked = (p5) => {
        const x = p5.mouseX;
        const y = p5.pmouseY;


        p5.fill(p5.color('hsla(160, 10%, 60%, 0.1)'))
        p5.stroke('rgb(0,255,0)');
        p5.strokeWeight(1);

        // const ourCircle = p5.circle(x, y, 500)
        const div = p5.createDiv('');
        div.style('border-radius', '100%');
        div.style('z-index', '300')
        div.style('display', 'show')
        div.position(x-30, y-30);
        div.elt.className = 'mouseCircle'
 
        
    } 
	return <Sketch mouseClicked={mouseClicked} windowResized={windowResized} className='sketch' setup={setup} draw={draw} />;
};