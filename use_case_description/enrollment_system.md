
|       |      |
| :---: | :--- |
| Use case name | accept information/requirements |
| Scenerio | student gives information/requirements to a teahcer |
| Triggering event | student submits information record to the teacher |
| Brief description | when the student submits information record, the teacher verify the records is the system |
| Actors | teacher, student |
| Related use case | includes: verify student information record |
| Stakeholders | student: to provide information</br> guidance: use to retrieve student information for profiling |
| Preconditions | student must submit information records |
| Postconditions | |
| Flow of activities | <table> <thead><tr><th>Actor</th> <th>System</th></tr></thead> <tbody><tr><td>1. the student submits information record to the teacher.</br>2. the teacher verify student information.</br>3. if the student is new/transferee, teacher input student information records.</td><td>3.1 accept information/requirements</td></tr></tbody> </table> |
| Exception conditions | |
</br>

|       |      |
| :---: | :--- |
| Use case name | verify student's information record |
| Scenario | teacher verify the submitted student information record |
| Triggering event | the system accept student status information |
| Brief Description | the system verify student information record, the teacher update the student's requirement table |
| Actors | teacher |
| Related use case | includes: update student requirement table |
| Stakeholders | teacher: to verify information record |
| Preconditions | student records must exist |
| Postconditions | |
| Flow of activities | <table> <thead><tr><th>Actor</th><th>System</th></tr></thead> <tbody><tr><td>1. teacher verify student information records.</br> 2. teacher evaluate old student information records.</td><td>2.1 verify student previous information record</td></tr></tbody></table> |
| Exception conditions | |
</br>

|       |      |
| :---: | :--- |
| Use case name | update student requirement table |
| Scenario | teacher input student requirements description |
| Triggering event | the system verify student information records |
| Brief description | the system update old student records and register the new/transferee student |
| Actors | teacher |
| Related use case | includes: update old student academic status</br> includes: register new/transferee student |
| Stakeholders | teacher: to update student status |
| Preconditions | student must be verified |
| Postconditions | |
| Flow of activities | <table> <thead><tr><th>Actor</th><th>System</th></tr></thead> <tbody><tr><td>1. teacher access student information records.</br> 2. teacher update student requirement table.</td><td>2.1 update old student requirement table</td></tr></tbody></table> |
| Exceptio conditions | |
</br>

|       |      |
| :---: | :--- |
| Use case name | update old student academic records |
| Scenario | if the student is old student the teacher will update his/her records |
| Triggering event | system updates the student requirement table |
| Brief description | the system updates the student requirement table, the teacher will also update old student academic status |
| Actors | teacher |
| Related use case | includes: update student requirement table |
| Stakeholders | teacher: to update old student status |
| Preconditions | student must be updated |
| Postconditions | old student records must be updated |
| Flow of activities | <table> <thead><tr><th>Actor</th><th>System</th></tr></thead> <tbody><tr><td>1. the teacher wil update old student records.</br> 2. the teacher will update old student academic status.</td><td>2.1 update old student academic status</td></tr></tbody></table> |
| Exception conditions | |
</br>

| :---: | :--- |
| Use case name | register new/transferee student |
| Scenario | teacher add new records to new/transferee students |
| Triggering event | system verify student information record |
| Brief description | system updates the student requirement table and register new/transferee student. |
| Actors | teacher |
| Related use case | includes: update student requirement table |
| Stakeholders | teacher: to register new/transferee student |
| Preconditions | student must be updated |
| Postconditions | student must be enrolled |
| Flow of activities | <table> <thead><tr><th>Actor</th><th>System</th></tr></thead> <tbody><tr><td>1. the teacher wil input student information record.</br> 2. the teacher register new/transferee student.</td><td>2.1 register new/transferee student</td></tr></tbody></table> |
| Exception conditions | |
</br>

