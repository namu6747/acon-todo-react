let backendHost;

const hostname = window && window.location && window.location.hostname;

if (hostname === "localhost"){
    backendHost = "http://localhost:8080";
} else {
    backendHost = "http://prodtodobackend-env.eba-qv2dvcmi.ap-northeast-1.elasticbeanstalk.com";
}

export const API_BASE_URL = `${backendHost}`;