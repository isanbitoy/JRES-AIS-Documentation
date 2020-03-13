
|       |      |
| :---: | :--- |
| Use case name | access student information record |
| Scenerio | guidance clerk access student information in the system |
| Triggering event | teacher register student information record |
| Brief description | guidance clerk can access enrolled student information record |
| Actors | guidance |
| Related use case | includes: update/edit student information |
| Stakeholders | guidance: to access student information |
| Preconditions | student must be enrolled |
| Postconditions | student previous records must be updated |
| Flow of activities | <table> <thead><tr><th>Actor</th> <th>System</th></tr></thead> <tbody><tr><td>1. guidance search for enrolled student.</br>2. guidance can access student information record.</td><td>2.1 access student information record.</td></tr></tbody> </table> |
| Exception conditions | |
</br>

|       |      |
| :---: | :--- |
| Use case name | add teacher |
| Scenerio | guidance clerk add new teacher in the system |
| Triggering event | guidance input new teacher information record |
| Brief description | when there is new teacher |
| Actors | guidance |
| Related use case | includes: update/edit teacher information |
| Stakeholders | guidance: to add new teacher |
| Preconditions | teacher must exist</br> teacher must submit information records |
| Postconditions | |
| Flow of activities | <table> <thead><tr><th>Actor</th> <th>System</th></tr></thead> <tbody><tr><td>1. guidance will input teacher information record</br>2. guidance register new teacher information record</td><td>2.1 add new teacher</td></tr></tbody> </table> |
| Exception conditions | |
</br>

|       |      |
| :---: | :--- |
| Use case name | update/edit student information |
| Scenerio | guidance clerk modifies student information |
| Triggering event | guidance access new student information record |
| Brief description | guidance access student information record, clerk can modify the student information records in the system |
| Actors | guidance |
| Related use case | includes: print student/teacher lists |
| Stakeholders | guidance: to modify student information record |
| Preconditions | student record must exist |
| Postconditions | |
| Flow of activities | <table> <thead><tr><th>Actor</th> <th>System</th></tr></thead> <tbody><tr><td>1. guidance access enrolled student information record</br>2. guidance modify student information record</td><td>2.1 update/edit student information</td></tr></tbody> </table> |
| Exception conditions | |
</br>

|       |      |
| :---: | :--- |
| Use case name | update/edit teacher information |
| Scenerio | guidance clerk modifies teacher information |
| Triggering event | guidance access new teacher information record |
| Brief description | guidance access teacher information record, clerk can modify the teacher information records in the system |
| Actors | guidance |
| Related use case | includes: print student/teacher lists |
| Stakeholders | guidance: to register new/transferee student |
| Preconditions | student must be updated |
| Postconditions | |
| Flow of activities | <table> <thead><tr><th>Actor</th> <th>System</th></tr></thead> <tbody><tr><td>1. guidance access new teacher information record</br>2. guidance update/edit new teacher information record</td><td>2.1 update/edit teacher information</td></tr></tbody> </table> |
| Exception conditions | |
</br>

|       |      |
| :---: | :--- |
| Use case name | print student/teacher lists |
| Scenerio | guidance clerk print a list of enrolled students and teachers lists |
| Triggering event | guidance modifies student/teacher information record |
| Brief description | guidance update/edit student/teacher information record |
| Actors | guidance |
| Related use case | includes: update/edit student and teacher information |
| Stakeholders | teacher: to register new/transferee student |
| Preconditions | student record must exist |
| Postconditions | |
| Flow of activities | <table> <thead><tr><th>Actor</th> <th>System</th></tr></thead> <tbody><tr><td>1. guidance access updated teacher/student information record</br>2. guidance initiate to print teacher/student lists</td><td>2.1 print student/teacher lists</td></tr></tbody> </table> |
| Exception conditions | |

