# Routes

[Login route](#login-route)
[Refresh token](#refresh-token)
[Travel route](#travel-route)
[Day route](#day-route)
[Activity route](#activity-route)


### 
**Login route**
```
url/api/login (POST):
        - status 201 (User created) :
            -> accessToken 
            -> refreshToken
        - status 200 (User logged in) :
            -> accessToken 
            -> refreshToken

```

**Refresh token**
```
url/api/refresh-token (POST):
    - body : refreshToken
    - status 200 (Token validated) :
        -> accessToken
        -> refreshToken
```

**Travel route**
```
url/api/travel/ (GET):
    - status 200 (Return all travels)
    - status 400 (Invalid request)

url/api/travel/ (POST):
    - body
    - status 201 (Travel created)
    - status 400 (Failed request)

url/api/travel/ (DELETE):
    - query : id
    - status 200 (Deleted successfully)
    - status 400 (Failed request)

url/api/travel/name (PATCH):
    - query: id
    - body : name
    - status 200 (Changed successfully)
    - status 400 (Failed request)

url/api/travel/sdate (PATCH):
    - query: id
    - body : startDate
    - status 200 (Changed successfully)
    - status 400 (Failed request)

url/api/travel/edate (PATCH):
    - query: id
    - body : endDate
    - status 200 (Changed successfully)
    - status 400 (Failed request)

url/api/travel/expense (PATCH):
    - query: id
    - body : totalExpense
    - status 200 (Changed successfully)
    - status 400 (Failed request)

url/api/travel/budget (PATCH):
    - query: id
    - body : budget
    - status 200 (Changed successfully)
    - status 400 (Failed request)
```

**Day route**
```
url/api/day/ (GET):
    - status 200 (Return all days)
    - status 400 (Invalid request)

url/api/day/ (POST):
    - body
    - status 201 (Day created)
    - status 400 (Failed request)

url/api/day/delete-one (DELETE):
    - query: id
    - status 201 (Day deleted)
    - status 400 (Failed request)

url/api/day/delete-array (DELETE):
    - query: [id]
    - status 201 (Days deleted)
    - status 400 (Failed request)

url/api/day/ (DELETE):
    - status 201 (Days deleted)
    - status 400 (Failed request)

url/api/day/date (PATCH):
    - query: id
    - body : date
    - status 200 (Changed successfully)
    - status 400 (Failed request)

url/api/day/description (PATCH):
    - query: id
    - body : description
    - status 200 (Changed successfully)
    - status 400 (Failed request)

url/api/day/expense (PATCH):
    - query: id
    - body : expense
    - status 200 (Changed successfully)
    - status 400 (Failed request)
```

**Activity route**
```
url/api/activity/ (GET):
    - status 200 (Return all activitys)
    - status 400 (Invalid request)

url/api/activity/ (POST):
    - body
    - status 201 (Activity created)
    - status 400 (Failed request)

url/api/activity/delete-one (DELETE):
    - id
    - status 200 (Activity deleted)
    - status 400 (Failed request)

url/api/activity/ (DELETE):
    - status 200 (Activities deleted)
    - status 400 (Failed request)

url/api/activity/name (PATCH):
    - query: id
    - body : name
    - status 200 (Changed successfully)
    - status 400 (Failed request)

url/api/activity/expense (PATCH):
    - query: id
    - body : expense
    - status 200 (Changed successfully)
    - status 400 (Failed request)
```
