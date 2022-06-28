// ----------------------------------------------------------------------------
//--------------------navbar ----------------------------------
// ----------------------------------------------------------------------
const navigation = document.querySelector(".navbar")

var nomDePage = window.location.pathname;
nomDePage = nomDePage.split("/");
// nomDePage = nomDePage[nomDePage.length - 1];
// nomDePage = nomDePage.substr(0, nomDePage.lastIndexOf("."));
// nomDePage = nomDePage.replace(new RegExp("(%20|_|-)", "g"), "");

//  console.log(nomDePage.length)
//   console.log(nomDePage[1])
// if (nomDePage[1] == "commander") {
//     console.log(true);
//     document.querySelector('body').style.backgroundColor = "#294062";
//   }else if (nomDePage[1] == "eduquer") {
//     console.log(true);
//     document.querySelector('body').style.backgroundColor = "#8d943f";
      
//   }else if (nomDePage[1] == "communiquer") {
//     console.log(true);
//     document.querySelector('body').style.backgroundColor = "#734693";
      
//   }else if (nomDePage[1] == "situer") {
//     console.log(true);
//     document.querySelector('body').style.backgroundColor = "#1a4a28";
      
//   }else if (nomDePage[1] == "instruire") {
//     console.log(true);
//     document.querySelector('body').style.backgroundColor = "#891b0b";
//   }

switch (nomDePage.length) {
        case 1:

        break;
        case 2:
            var cheminRelatif = "/"
        break;
        case 3:
            var cheminRelatif = "./"
        break;
        case 4:
            var cheminRelatif = "../"
        break;
        case 5:
            var cheminRelatif = ".../"
        case 8:
            var cheminRelatif = "/"
        break;
        case 9:
            var cheminRelatif = "./"
        break;
        case 10:
            var cheminRelatif = "../"
        break;
        case 11:
            var cheminRelatif = ".../"
        break;
        default:
          console.log(`Sorry, default`);
}
        

navigation.innerHTML = `<div class='container'><a class='navbar-brand text-uppercase fw-bold' href='#'><a class='navbar-brand' href='${cheminRelatif}index.html'><img src='${cheminRelatif}ressources/images/LogoAlpha.png' alt='logo nav alpha'></a></a><button class='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav'    aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'><span class='navbar-toggler-icon'></span></button><div class='collapse navbar-collapse justify-content-end bg-collapse' id='navbarNav'><ul class='navbar-nav'><li class='nav-item'><a class='nav-link' href='${cheminRelatif}index.html'>accueil</a></li><li class='nav-item dropdown'><a class='nav-link dropdown-toggle' id='navbarDropdown' role='button' data-bs-toggle='dropdown' aria-expanded='false'>compétences</a><ul class='dropdown-menu text-center' aria-labelledby='navbarDropdown'><li><a class='dropdown-item' href='${cheminRelatif}commander/commander.html'>Commander</a></li><li><a class='dropdown-item' href='${cheminRelatif}communiquer/communiquer.html'>Communiquer</a></li> <li><a class='dropdown-item' href='${cheminRelatif}situer/situer.html'>Se situer</a></li><li><a class='dropdown-item' href='${cheminRelatif}eduquer/eduquer.html'>Eduquer</a></li> <li><a class='dropdown-item' href='${cheminRelatif}instruire/instruire.html'>Instruire</a></li></ul></li><li class='nav-item'><a class='nav-link' href='${cheminRelatif}parcours.html'>parcours</a><li class='nav-item'><a class='nav-link' href='https://raphael56.github.io/podcast_ALPHA/' target='_blank' > podcast</ ></li ></ul ></div ></div > `


