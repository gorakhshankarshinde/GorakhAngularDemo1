import { Component } from '@angular/core';

@Component({
  selector: 'app-learn-abcd',
  templateUrl: './learn-abcd.component.html',
  styleUrls: ['./learn-abcd.component.scss']
})
export class LearnABCDComponent {



  img: string = "../GorakhAngularDemo1/assets/ABCD/learnAlphabet.jpg";

   // Method triggered when a button is clicked
   onButtonClick(value: string) {
    //console.log('Selected Button:', value);
    
    // Process the selected button value
    this.processButtonValue(value);
  }

  // Sample method to process the button value
  processButtonValue(value: string) {
    // Handle the logic based on the selected button
    switch (value) {
      case 'A':
        this.img= "../GorakhAngularDemo1/assets/ABCD/A.jpg";
        break;
      case 'B':
        this.img= "../GorakhAngularDemo1/assets/ABCD/B.jpg";
        break;
      case 'C':
        this.img= "../GorakhAngularDemo1/assets/ABCD/C.jpg";
        break;
      case 'D':
        this.img= "../GorakhAngularDemo1/assets/ABCD/D.jpg";
        break;
        case 'E':
        this.img= "../GorakhAngularDemo1/assets/ABCD/E.jpg";
        break;
      case 'F':
        this.img= "../GorakhAngularDemo1/assets/ABCD/F.jpg";
        break;
      case 'G':
        this.img= "../GorakhAngularDemo1/assets/ABCD/G.jpg";
        break;
      case 'H':
        this.img= "../GorakhAngularDemo1/assets/ABCD/H.jpg";
        break;
        case 'I':
        this.img= "../GorakhAngularDemo1/assets/ABCD/I.jpg";
        break;
      case 'J':
        this.img= "../GorakhAngularDemo1/assets/ABCD/J.jpg";
        break;
      case 'K':
        this.img= "../GorakhAngularDemo1/assets/ABCD/K.jpg";
        break;
      case 'L':
        this.img= "../GorakhAngularDemo1/assets/ABCD/L.jpg";
        break;
        case 'M':
        this.img= "../GorakhAngularDemo1/assets/ABCD/M.jpg";
        break;
      case 'N':
        this.img= "../GorakhAngularDemo1/assets/ABCD/N.jpg";
        break;
      case 'O':
        this.img= "../GorakhAngularDemo1/assets/ABCD/O.jpg";
        break;
      case 'P':
        this.img= "../GorakhAngularDemo1/assets/ABCD/P.jpg";
        break;
        case 'Q':
          this.img= "../GorakhAngularDemo1/assets/ABCD/Q.jpg";
          break;
          case 'R':
        this.img= "../GorakhAngularDemo1/assets/ABCD/R.jpg";
        break;

        case 'S':
        this.img= "../GorakhAngularDemo1/assets/ABCD/S.jpg";
        break;
        case 'T':
        this.img= "../GorakhAngularDemo1/assets/ABCD/T.jpg";
        break;
        case 'U':
        this.img= "../GorakhAngularDemo1/assets/ABCD/U.jpg";
        break;
        case 'V':
        this.img= "../GorakhAngularDemo1/assets/ABCD/V.jpg";
        break;
        case 'W':
        this.img= "../GorakhAngularDemo1/assets/ABCD/W.jpg";
        break;
        case 'X':
        this.img= "../GorakhAngularDemo1/assets/ABCD/X.jpg";
        break;
        case 'Y':
        this.img= "../GorakhAngularDemo1/assets/ABCD/Y.jpg";
        break;
        case 'Z':
        this.img= "../GorakhAngularDemo1/assets/ABCD/Z.jpg";
        break;

      default:
        console.log('Unknown button clicked');
    }
  }
}
