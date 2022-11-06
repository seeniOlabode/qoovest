/*
This file goes as an asset without any of compilation even after build process.
Thus, it can be replaced in a runtime by different file in another environment.

Example for Docker:
  docker run -v ./local_cfg_dir:cfg image:tag
*/

(function(window) {
    window.__env = window.__env || {};
    window.__env.app = {
        title: "Qoovest",
        description: "Qoovest",
        primaryColor: "#f3f6f8",
        stage: "dev"
    };
    window.__env.api = {
        baseUrl: "https://zu0qau80ea.execute-api.us-east-1.amazonaws.com/dev/",
        timeout: 80000,
        uploadS3BaseUrl:
            "https://m2nz1o078e.execute-api.us-east-1.amazonaws.com/prod/",
    };
    window.__env.captcha = {
        "enabled": true,
        "key": "Mee1ieth1IeR8aezeiwi0cai8quahy"
    };
    window.__env.rollbar = {
        "enabled": true,
        "token": "zieriu1Saip5Soiquie6zoo7shae0o"
    };
    window.__env.debug = false;
})(this);