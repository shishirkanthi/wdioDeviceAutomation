class wdioAppHomePage {
    get btnLogin() {
        return $('//android.widget.Button[@content-desc="Login"]');
    }

    get inputUsername() {
        return $('//android.widget.EditText[@content-desc="input-email"]');
    }

    get inputPassword() {
        return $('//android.widget.EditText[@content-desc="input-password"]');
    }

    get btnSubmit() {
        return $('//android.view.ViewGroup[@content-desc="button-LOGIN"]');
    }

    get lblWithText(){
        return $(`//android.widget.EditText[@content-desc="input-password"]/parent::android.view.ViewGroup/following-sibling::android.widget.TextView`);
    }

    async login (username, password) {
        await this.btnLogin.click();
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
    
    async getErrorMessage(){
        return await this.lblWithText.getText();
    }
}

export default new wdioAppHomePage();
