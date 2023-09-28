/* eslint-disable */
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.

const awsmobile = {
    "aws_project_region": "ap-northeast-1",
    "aws_cognito_region": "ap-northeast-1",
    "aws_user_pools_id": "ap-northeast-1_FKtwWIFfv",
    "aws_user_pools_web_client_id": "4j2gq77jdm80clcvtip8fb4330",
    "oauth": {
        "domain": "auth.simulationwave.com.auth.ap-northeast-1.amazoncognito.com",
        "scope": [
            "aws.cognito.signin.user.admin",
            "email",
            "openid",
            "profile"
        ],
        "redirectSignIn": "http://localhost:3000/hello/,https://www.simulationwave.com/hello/",
        "redirectSignOut": "http://localhost:3000/fail,https://www.simulationwave.com/fail/",
        "responseType": "code"
    },
    "federationTarget": "COGNITO_USER_POOLS",
    "aws_cognito_username_attributes": [
        "EMAIL"
    ],
    "aws_cognito_social_providers": [
        "GOOGLE"
    ],
    "aws_cognito_signup_attributes": [
        "EMAIL"
    ],
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_mfa_types": [],
    "aws_cognito_password_protection_settings": {
        "passwordPolicyMinLength": 8,
        "passwordPolicyCharacters": []
    },
    "aws_cognito_verification_mechanisms": [
        "EMAIL"
    ]
};


export default awsmobile;
