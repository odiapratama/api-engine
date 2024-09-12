module.exports = {
    "project": {
        "name": "My Project",
        "description": "This is my project"
    },
    "pages": {
        "login": {
            "header": {
                "title": "Login",
                "description": "Please enter your username and password",
                "image": "https://www.example.com/login.jpg"
            },
            "fields": [
                {
                    "id": 1,
                    "name": "username",
                    "label": "Username",
                    "type": "email",
                    "placeholder": "Enter your username"
                },
                {
                    "id": 2,
                    "name": "password",
                    "label": "Password",
                    "type": "password",
                    "placeholder": "Enter your password"
                },
                {
                    "id": 3,
                    "name": "submit",
                    "label": "Login",
                    "type": "submit"
                }
            ]
        },
        "register": {
            "header": {
                "title": "Register",
                "description": "Please enter your details",
                "image": "https://www.example.com/register.jpg"
            },
            "fields": [
                {
                    "id": 1,
                    "name": "fullName",
                    "label": "Full Name",
                    "type": "text",
                    "placeholder": "Enter your full name"
                },
                {
                    "id": 2,
                    "name": "email",
                    "label": "Email",
                    "type": "email",
                    "placeholder": "Enter your email"
                },
                {
                    "id": 3,
                    "name": "password",
                    "label": "Password",
                    "type": "password",
                    "placeholder": "Enter your password"
                },
                {
                    "id": 4,
                    "name": "confirmPassword",
                    "label": "Confirm Password",
                    "type": "password",
                    "placeholder": "Confirm your password"
                },
                {
                    "id": 5,
                    "name": "tncPrivacy",
                    "label": "I agree to Terms & Conditions and Privacy Policy",
                    "type": "checkbox"
                },
                {
                    "id": 6,
                    "name": "submit",
                    "label": "Register",
                    "type": "submit"
                }
            ]
        },
        "home": {
            "header": {
                "title": "Welcome",
                "description": "Welcome to our website",
                "image": "https://www.example.com/welcome.jpg"
            },
            "menu": [
                {
                    "id": "profile",
                    "name": "Profile",
                    "url": "/profile",
                    "icon": "fa-user"
                },
                {
                    "id": "about",
                    "name": "About",
                    "url": "/about",
                    "icon": "fa-info"
                },
                {
                    "id": "settings",
                    "name": "Settings",
                    "url": "/settings",
                    "icon": "fa-cog"
                },
                {
                    "id": "logout",
                    "name": "Logout",
                    "url": "/logout",
                    "icon": "fa-sign-out"
                }
            ]
        }
    }
}