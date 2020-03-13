
|       |      |
| :---: | :--- |
| Use case name | input student grades |
| Scenerio | input new student grades |
| Triggering event | teacher input student quarterly grades and deportment records |
| Brief description | input quarterly grades and deportment records, checks and finalize student grades |
| Actors | teacher |
| Related use case | |
| Stakeholders | adviser: to use as basis for the student's form-131/report card |
| Preconditions | student must exist in database</br> student must be enrolled in the current school year</br> teacher must exist in database |
| Postconditions | grade and deportment records must be associated to the intended student |
| Flow of activities | <table> <thead><tr><th>Actor</th> <th>System</th></tr></thead> <tbody><tr><td>1. teacher search student in the system</br>2. teacher input grades and deportment record on the student grade list</td><td>1.1 system verifies student record</br> 2.1 system updates student grade and deportment records</td></tr></tbody> </table> |
| Exception conditions | if student does not exist, systems prompts error dialog and transaction cannot start |
</br>

|       |      |
| :---: | :--- |
| Use case name | access student grade and deportment records |
| Scenerio | adviser access student grade and deportment records in the system |
| Triggering event | adviser access student grade and deportment record for evaluation |
| Brief description | adviser view/edit student record, finalize and end transaction |
| Actors | adviser |
| Related use case | |
| Stakeholders | |
| Preconditions | student must exist in student database</br> student must be enrolled in the current school year</br> student must be enrolled on his/her class |
| Postconditions | grade and deportment records must be associated to the intended student |
| Flow of activities | <table> <thead><tr><th>Actor</th> <th>System</th></tr></thead> <tbody><tr><td>1. adviser search student in the database</br>2. adviser view/edit student records</td><td>1.1 system verifies student information record</br> 2.1 system display student record</br> 2.2 system updates student database</td></tr></tbody> </table> |
| Exception conditions | if student does not exist, systems prompts error dialog and transaction cannot start |
</br>

|       |      |
| :---: | :--- |
| Use case name | print student grade and deportment record |
| Scenerio | print grade and deportment record of student list |
| Triggering event | adviser prints grade and deportment record of the student |
| Brief description | adviser view student in his/her class and prints student list |
| Actors | adviser |
| Related use case | |
| Stakeholders | guidance: provide information of the student's performance |
| Preconditions | student must exist in student database</br> student must be enrolled in the current school year</br> student must be enrolled on his/her class |
| Postconditions | student records must be associated to the intended student |
| Flow of activities | <table> <thead><tr><th>Actor</th> <th>System</th></tr></thead> <tbody><tr><td>1. adviser view student on his/her class</br>2. adviser view/edit student grades</br>3. adviser prints student grades</td><td>1.1 system provides student list</br>2.1 list student grade</br>3.1 prints student grade report</td></tr></tbody> </table> |
| Exception conditions | |
</br>

|       |      |
| :---: | :--- |
| Use case name | print section grade list |
| Scenerio | adviser prints grade of students in his/her class |
| Triggering event | adviser prints list of grades of class for records/references |
| Brief description | view student his/her class and print all student grades |
| Actors | adviser |
| Related use case | |
| Stakeholders | guidance: provide information of the section's performance |
| Preconditions | student must exist in student database</br> student must be enrolled in the current school year</br> student must be enrolled on his/her class</br> teacher must exist in database |
| Postconditions | class records must be associated to the intended class |
| Flow of activities | <table> <thead><tr><th>Actor</th> <th>System</th></tr></thead> <tbody><tr><td>1. adviser view student on his/her class</br>2. adviser view/edit student grades</br>3. adviser prints student grades</td><td>1.1 student list</br>2.1 list student grade</br>3.1 prints student grade report</td></tr></tbody> </table> |
| Exception conditions | |
</br>

|       |      |
| :---: | :--- |
| Use case name | print honor candidates |
| Scenerio | adviser prints list of honor candidates |
| Triggering event | adviser prints list of students eligible to be honor candidate |
| Brief description | mark student as honor candidate who obtain the required grade to be honor roll</br> print honor candidates |
| Actors | adviser |
| Related use case | |
| Stakeholders | |
| Preconditions | student must exist in student database</br> student must be enrolled in the current school year</br> student must be enrolled on his/her class |
| Postconditions | edited/viewed student records must be associated to the intended student |
| Flow of activities | <table> <thead><tr><th>Actor</th> <th>System</th></tr></thead> <tbody><tr><td>1. adviser view student on his/her class</br>2. adviser view/edit student grades</br>3. adviser finalize work and end transactions</td><td>1.1 display list of students</br>2.1 display student grades</td></tr></tbody> </table> |
| Exception conditions | if student does not exist, systems prompts error dialog and transaction cannot start |
</br>

|       |      |
| :---: | :--- |
| Use case name | print failed students |
| Scenerio | teacher print failed students |
| Triggering event | teacher mark student failed status for student who failed to attain the required average grade |
| Brief description | mark failed status for student that fails to get an average/passing grade</br> prints list of student with failed status |
| Actors | teacher |
| Related use case | |
| Stakeholders | adviser: use as a reference for student's class standing |
| Preconditions | student must exist in student database</br> student must be enrolled in the current school year</br> student must be enrolled on his/her class |
| Postconditions | edited/viewed student records must be associated to the intended student |
| Flow of activities | <table> <thead><tr><th>Actor</th> <th>System</th></tr></thead> <tbody><tr><td>1. teacher view student on his/her subject class</br>2. teacher view/edit student grades</br>3. teacher mark student status and update student records</td><td>1.1 provides student list</br>2.1 provide student grade list</br>update student database</td></tr></tbody> </table> |
| Exception conditions | |
</br>

|       |      |
| :---: | :--- |
| Use case name | drop student  |
| Scenerio | adviser drop student |
| Triggering event | adviser drop student who reach the allowed absences |
| Brief description | adviser view student deportment records</br> drop student that reach maximum allowed absences |
| Actors | adviser |
| Related use case | |
| Stakeholders | guidance: provide current status information of the student |
| Preconditions | student must exist in student database</br> student must be enrolled in the current school year</br> student must be enrolled on his/her class |
| Postconditions | the updated student records must be associated to the intended student |
| Flow of activities | <table> <thead><tr><th>Actor</th> <th>System</th></tr></thead> <tbody><tr><td>1. adviser view student on his/her class</br>2. adviser view/edit deportment records</br>3. adviser drop student</td><td>1.1 display list of students</br>2.1 display student grades</td></tr></tbody> </table> |
| Exception conditions | if student does not exist, systems prompts error dialog and transaction cannot start |