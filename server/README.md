# Routes

[Login route](#Login-route)
[Travel route](#Travel-route)
[Day route](#Day-route)
[Activity route](#Activity-route)


### 
**Login route**
```
url/api/login (POST):
        - status 201 (User created) :
            -> Cookie('auth') = (value) id
        - status 200 (User logged in) :
            -> Cookie('auth') = (value) id
        - status 200 (Cookie already found)

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

url/api/travel/ (PATCH):
    - query: id
    - body : name
    - status 200 (Changed successfully)
    - status 400 (Failed request)

url/api/travel/ (PATCH):
    - query: id
    - body : startDate
    - status 200 (Changed successfully)
    - status 400 (Failed request)

url/api/travel/ (PATCH):
    - query: id
    - body : endDate
    - status 200 (Changed successfully)
    - status 400 (Failed request)

url/api/travel/ (PATCH):
    - query: id
    - body : totalExpense
    - status 200 (Changed successfully)
    - status 400 (Failed request)

url/api/travel/ (PATCH):
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

url/api/day/ (PATCH):
    - query: id
    - body : date
    - status 200 (Changed successfully)
    - status 400 (Failed request)

url/api/day/ (PATCH):
    - query: id
    - body : description
    - status 200 (Changed successfully)
    - status 400 (Failed request)

url/api/day/ (PATCH):
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

url/api/activity/ (DELETE):
    - id
    - status 200 (Activity deleted)
    - status 400 (Failed request)

url/api/activity/ (PATCH):
    - query: id
    - body : name
    - status 200 (Changed successfully)
    - status 400 (Failed request)

url/api/activity/ (PATCH):
    - query: id
    - body : expense
    - status 200 (Changed successfully)
    - status 400 (Failed request)
```
