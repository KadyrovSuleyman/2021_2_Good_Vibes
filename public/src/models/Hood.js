import Request from "../js/requests.js";

export default class Hood {
    #parent;

    constructor(parent) {
        this.#parent = parent;
    }

    render() {
        this.#parent.innerHTML = `
      <header>
        <a href="#" class="logo"><span>O</span>zon2.0</a>
        <div class="icons">
          <a href="#", class="profile-href"><i class="fas fa-user" id="login-btn"></i></a>
        </div>
      </header>
      <main id="main-container"></main>
      <footer>@2021 GoodVibes</footer>
      `;

        const homeLink = this.#parent.getElementsByClassName("logo")[0];
        homeLink.addEventListener('click', (e) => {
            e.preventDefault();

            Request.homePage();

        })

        const profileLink = this.#parent.getElementsByClassName("profile-href")[0];
        profileLink.addEventListener('click', (e) => {
            e.preventDefault();

            Request.profile();
        })
    }
}
