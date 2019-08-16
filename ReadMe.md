# homeManager
Welcome to Home Manager

## Table of Contents
- [KeyFeatures](#KeyFeatures)

- [Naming](#Naming)
- [Heroku](#Heroku)
- [User Profiles](#UserProfiles)
- [Routes](#Routes)

## Naming
    - Branches 
        - feat_featureName
        - fix_fixName

## Heroku
    https://home-manager-backend.herokuapp.com/

## UserProfiles:
    - User Types
        1. Property Owner
        2. Landlord
        3. Third Party Maintenance
        4. Tenant

    - User Admin Category # & Abilities
        0 = n.a.
        1 = Property Owner
            - Create / Edit / Delete --> Landlord Users

            * Overlap w/ Landlord * 
                - Create / Edit / Delete --> Maintenance Request
                - Create / Edit / Delete --> Third Marty Maintenance Users
                - Create / Edit / Delete --> Maintenance Timesheets
                - Create / Edit / Delete --> Maintenance Receipts
                
                - Create / Edit / Delete --> Tenant Users
                - Create / Edit / Delete --> Tenant Bills
            
        2 = Landlord
            - Create / Edit --> Maintenance Request
            - Create / Edit --> Third Marty Maintenance Users
            - Create / Edit --> Maintenance Timesheets
            - Create / Edit --> Maintenance Receipts
            
            - Create / Edit --> Tenant Users
            - Create / Edit --> Tenant Bills

        3 = Third Party Maintenance
            - Create / Edit --> Timesheets
            - Create / Edit --> Maintenance Receipts

        4 = Tenant 
            - Create / Edit --> Maintenance Request
            - Pay Bills


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
    adminCat: INTEGER** 
}
** NOT requires -> Default = 0 
```

### Login

```
Accepted Shape of Front End API call:
{
    userName: "STRING",
    pw: "STRING",
}
```

Functionality:
- pw verification
- serves front end a JWT with payload:
    ```
    {
        userID: INTEGER,
        userName: 'STRING'
    }
    ```

# Versions

## 0.0.1 
    0.0.1 = {
    - 'live heroku BE: 
        1. users table 
    - available routes 
        1. /login
        2. /register
    }
