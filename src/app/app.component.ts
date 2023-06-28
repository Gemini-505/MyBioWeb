import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <main>

    <header>
      <div class="container">
        <img class="resize" src="/assets/SM2.png" alt="logo" aria-hidden="true">
        <pre>
          <h1 class="text"> <button class="primary" type="button">Home</button>      <button class="primary" type="button">About me</button>      <button class="primary" type="button">Experience</button>      <button class="primary" type="button">Contact</button><a href="/assets/Professional CV of Merwe van der Vyver.png" download="Professional CV of Merwe van der Vyver"><button class="CV" type="button">CV</button></a>
          </h1>
        </pre>
      </div>
    </header>
    <div class="line"></div>

    <body>
      <div class="center">
        <div class="border">Welcome</div>
      </div>
      <div class="center">
        <div class="form">
          <img class="Me" src="/assets/Me.png" alt="Photo of Merwe van der Vyver"> 
          <h1 class="texts">THIS IS ME!</h1>

          <p class="paragraph">I am currently a third-year Information Technology BSc student studying at North-West University. As a dedicated student, 
            I firmly believe in seizing every opportunity that comes my way and acquiring as much knowledge as possible during my years of study. 
            I am eagerly working towards obtaining my Bachelor's degree in Information Technology by the end of this year. 
            Additionally, I have already earned a short course certificate in front-end web development.
           </p>

           <p class="paragraph"> I am deeply passionate about coding and find it truly fascinating, not only when everything runs smoothly, but especially when I encounter challenges. 
            I derive great satisfaction from grappling with non-functional code, investing my time in unraveling the puzzle and comprehending the intricacies of why a solution works. 
            My thirst for knowledge in programming and coding knows no bounds, and I am always eager to expand my skills and explore new opportunities to learn and create.
          </p>

          <p class="paragraph"> I am hard working, I am kind. My dream and where I would see myself in 5 years, I hope to become a Software engineer. 
            For I will always want to learn and solve more problems everyday. For in coding we never stop. We will always learn new things and will always have something to solve.
          </p>
        </div>
      </div>
    </body>
    <div class="center">
      <div class="form2">
        
      <div id ="leftbox"><div class="center"><h1> Programmer</h1></div> <div class="center"><p class="atext">As a student who has a short course in front-end developing </p></div>
        </div>
        
        <div id="middlebox"><div class="center"><h1>Learner</h1></div> <div class="center"><p class="atext">As a learner </p></div>
        </div>

        <div id="rightbox"><div class="center"><h1>Challenger</h1></div> <div class="center"><p class="atext">As a challenger </p></div>
        </div>
      </div>
    </div>
    
    <body>
      <div class="center">
        <div id="botleftbox"> <p class="bordertext">Contact:</p>   <p class="bordertext">Cell: 0840578846</p>  <p class="bordertext">Email: merwevdvyver@gmail.com</p>
      </div>

        <div id = "botmiddlebox"> <p class="bordertext">Adress:</p> <p class="bordertext"> North-West </p> <p class="bordertext">Potchefstroom</p>
        </div>

        <div id ="botrightbox"></div>
      </div>
    </body>
    <div class="center"> <img class="last" src="/assets/SM2.png" alt="logo" aria-hidden="true"></div>
  </main>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Merwe van der Vyver CV';
}
