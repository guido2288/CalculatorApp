import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  .dark{
    --Bakg: hsl(222, 26%, 31%);
    --ToggleBkg: hsl(223, 31%, 20%);
    --ScreenBkg: hsl(224, 36%, 15%);
    --KeyBkg: hsl(225, 21%, 49%);
    --KeyBkgShadow: hsl(224, 28%, 35%);
    --KeyResult: hsl(6, 63%, 50%);
    --KeyResultShadow: hsl(6, 70%, 34%);
    --KeyNumber: hsl(30, 25%, 89%);
    --KeyNumberShadow: hsl(28, 16%, 65%);
    --TextNumber: hsl(221, 14%, 31%);
    --Text: white;
    --TextResult: white;

  }

  .light{
    --Bakg: hsl(0, 0%, 90%);
    --ToggleBkg: hsl(0, 5%, 81%);
    --ScreenBkg:  hsl(0, 0%, 93%);
    --KeyBkg: hsl(185, 42%, 37%);
    --KeyBkgShadow: hsl(185, 58%, 25%);
    --KeyResult: hsl(25, 98%, 40%);
    --KeyResultShadow: hsl(25, 99%, 27%);
    --KeyNumber: hsl(45, 7%, 89%);
    --KeyNumberShadow: hsl(35, 11%, 61%);
    --TextNumber: hsl(60, 10%, 19%);
    --Text: hsl(60, 10%, 19%);
    --TextResult: white;
  }

  .purple{
    --Bakg: hsl(268, 75%, 9%);
    --ToggleBkg: hsl(268, 71%, 12%);
    --ScreenBkg: hsl(268, 71%, 12%);
    --KeyBkg: hsl(281, 89%, 26%);
    --KeyBkgShadow: hsl(285, 91%, 52%);
    --KeyResult: hsl(176, 100%, 44%);
    --KeyResultShadow: hsl(177, 92%, 70%);
    --KeyNumber: hsl(268, 47%, 21%);
    --KeyNumberShadow: hsl(290, 70%, 36%);
    --TextNumber: hsl(52, 100%, 62%);
    --TextResult: hsl(198, 20%, 13%);
    --Text: hsl(52, 100%, 62%);
    --TextResult: hsl(198, 20%, 13%);
  }


  body{
    background-color: var(--Bakg);
  }






`;

export default GlobalStyle;