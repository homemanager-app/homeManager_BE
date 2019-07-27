-- INITIAL COMMIT TO BACK END BRANCH

# homeManager
Welcome to Home Manager

## Table of Contents
- [KeyFeatures](#KeyFeatures)

- [Heroku](#Heroku)
- [User Profiles](#UserProfiles)
- [Routes](#Routes)

## Heroku
    https://home-manager-backend.herokuapp.com/

## UserProfiles:
    StakeholderTree
    - Property Owner (everything)(mainAdmin)
    - Landlord (bills)(admin)

    Beneficiaries
    - Property Manager (maintenance)
    - Tenant(s)
    - Service (third party repair)

## Routes

### Register New User

Functionality: 
- All passwords are hashed upon registration

Future Functionality: 
- Set input restrictions on user's pw entry
- Use Third Party Auth Service

```
Accepted Shape of Front End API call:
{
    lastName: "STRING",
    firstName: "STRING",
    userName: "STRING",
    pw: "STRING",
    adminCat: 1,
    jobCat: 1
}
```

### Login

Functionality:
- pw verification
- serves front end a JWT with payload:
    ```
    {
        userID: INTEGER,
        userName: 'STRING'
    }
    ```

```
Accepted Shape of Front End API call:
{
    userName: "STRING",
    pw: "STRING",
}
```


