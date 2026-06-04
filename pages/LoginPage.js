const BasePage = require('./BasePage');

class LoginPage extends BasePage {
    constructor(page){
        super(page);
        this.usernameInput = '#user-name';
        this.passwordInput = '#password';
        this.loginButton = '#login-button';
        this.dashboardSelector = '//div[contains(text(),"Swag Labs")]';
    }   

    async navigateToLoginPage(){        
        await this.navigate(process.env.BASEURL);
        }
    async login(username, password){
        await this.type(this.usernameInput, username);
        await this.type(this.passwordInput, password);
        
    }   
    async clickLoginButton(){
        await this.click(this.loginButton);
    }
    async waitForDashboard(){
        await this.page.waitForSelector(this.dashboardSelector);
    }
}

module.exports = LoginPage;