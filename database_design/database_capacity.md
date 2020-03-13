table name: student</br>
primary key: studentID</br>
foreign key: none</br>
database name: joseRizalDB

| name | data type | field size | unit of measure | coding | data integrity rules | maintenance controls | formula | referential integrity | ownership |
| :---: | :---:| :---: | :---:| :---: | :---:| :---: | :---:| :---: | :---:|
| studentID | Int | 11 | none | none | studentID cannot be duplicate and increment only by one | studentID can't change once it is created and must be unique | previous value plus 1 | studentID in the student table must match a studentID in the enrollment table | techer and guidance clerk |
| lastName | Varchar | 100 | none | none | none | none | none | none | teacher and guidance clerk |
| firstName | Varchar | 100 | none | none | none | none | none | none | teacher and guidance clerk |
| middleName | Varchar | 100 | none | none | none | none | none | none | teacher and guidance clerk |
| address | Varchar | 100 | none | none | none | none | none | none | teacher and guidance clerk |
| dateOfBirth | datetime | 25 | MM/DD/YY | none | none | none | none | none | teacher and guidance clerk |
| sex | Varchar | 25 | none | none | none | none | none | none | teacher and guidance clerk |
| phone | Varchar | 50 | none | none | none | none | none | none | teacher and guidance clerk |
| gNextYear | Varchar | 25 | none | none | none | none | none | none | teacher and guidance clerk |
| gaurdian_1 | Varchar | 100 | none | none | none | none | none | none | teacher and guidance clerk |
| relation_1 | Varchar | 50| none | none | none | none | none | none | teacher and guidance clerk |
| cellNo_1 | Varchar | 50| none | none | none | none | none | none | teacher and guidance clerk |
| gaurdian_2 | Varchar | 100 | none | none | none | none | none | none | teacher and guidance clerk |
| relation_2 | Varchar | 50| none | none | none | none | none | none | teacher and guidance clerk |
| cellNo_2 | Varchar | 50| none | none | none | none | none | none | teacher and guidance clerk |
</br>

table name: teacher</br>
primary key: teacherID</br>
foreign key: none</br>
database name: joseRizalDB

| name | data type | field size | unit of measure | coding | data integrity rules | maintenance controls | formula | referential integrity | ownership |
| :---: | :---:| :---: | :---:| :---: | :---:| :---: | :---:| :---: | :---:|
| teacherID | Int | 11 | none | none | teacherID cannot be duplicated and increment only by one | teacgerID can't change once it is created and must be unique | previous value plus 1 | teacherID in teacher table must match a teacherID in expertise table | guidance clerk |
| fullName | Varchar | 100 | none | none | none | none | none | none | guidance clerk |
| contact | Varchar | 100 | none | none | none | none | none | none | guidance clerk |
| address | Varchar | 100 | none | none | none | none | none | none | guidance clerk |
| dateOfBirth | datetime | 25 | MM/DD/YY | none | none | none | none | none | guidance clerk |
| sex | Varchar | 25 | none | none | none | none | none | none | guidance clerk |
| civilStatus | Varchar | 25 | none | none | none | none | none | none | guidance clerk |
| course | Varchar | 50 | none | none | none | none | none | none | guidance clerk |
| details | Varchar | 50 | none | none | none | none | none | none | guidance clerk |
| status | Varchar | 50 | none | none | none | none | none | none | guidance clerk |
| teachingLevel | Int | 11 | none | none | none | none | none | teachingLevel in teacher table must match the classLevel in class table or level in subject table | guidance clerk |
</br>

table name: subject</br>
primary key: subjectID</br>
foreign key: grades_gradeID | enrollment_enrollmentID</br>
database name: joseRizalDB

| name | data type | filed size | unit of measurement | coding | data integrity rules | maintenance controls | formula | referential integrity | ownership |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| subjectID | Int | 11 | none | none | subjectID cannot be duplicated | subjectID cant change once it is created | previous value plus 1 | the subjectID in the subject table must match a subjectID in experise table | principal | 
| grades_gradeID | Int | 11 | none | none | none | none | previous value plus 1 | grades_gradeID in subject table must match the gradeID | principal & guidance clerk |
| enrollment_enrollmentID | Int | 11 | none | none | none | none | previous value plus 1 | enrollment_enrollmentID in subject table must match the enrollmentID | principal & guidance clerk |
| subjectName | Varchar | 100 | none | none | none | none | none | none | principal |
| level | Int | 11 | none | none | none | none | none | level in subject table must match in teachingLevel in teacher table | principal |
| description | Varchar | 100 | none | none | none | none | none | none | principal |
</br>

table name: class</br>
primary key: classID</br>
foreign key: none</br>
database name: joseRizalDB

| name | data type | filed size | unit of measurement | coding | data integrity rules | maintenance controls | formula | referential integrity | ownership |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| classID | Int | 11 | none | none | classID cannot be duplicated | classID can't change once it is created | previous value plus 1 | classID in the class table must match the classID in the enrollment table | guidance clerk |
| className | Varchar | 100 | none | none | none | none | none | none | guidance clerk |
| maxStudent | Int | 11 | none | none | none | none | none | none | guidance clerk |
| classLevel | Varchar | 100 | none | none | none | none | none | classLevel in class table must match the teachingLevel in teacher table | guidance clerk |
| classDescription | Varchar | 100 | none | none | none | none | none | none | guidance clerk |
</br>

table name: grades</br>
primary key: gradeID</br>
foreign key: enrollment_enrollmentID</br>
database name: joseRizalDB

| name | data type | filed size | unit of measurement | coding | data integrity rules | maintenance controls | formula | referential integrity | ownership |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| gradeID | Int | 11 | none | none | gradeId cannot be duplicated | gradeID can't be change once it is created and must be unique | previous value plus 1 | gradeID in grades table must match gradeID in subject table | teacher |
| enrollment_enrollmentID | Int | 11 | none | none | none | none | previous value plus 1 | enrollment_enrollmentID in grades table must match enrollment_enrollmentID in enrollment table | teacher |
| firstGrading | Int | 11 | none | none | none | none | none | none | teacher |
| secondGrading | Int | 11 | none | none | none | none | none | none | teacher |
| thirdrading | Int | 11 | none | none | none | none | none | none | teacher |
| fourthGrading | Int | 11 | none | none | none | none | none | none | teacher |
</br>

table name: enrollment</br>
primary key: enrollmentID</br>
foreign key: student_studentID |
			 class_classID</br>
database name: joseRizalDB

| name | data type | filed size | unit of measurement | coding | data integrity rules | maintenance controls | formula | referential integrity | ownership |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| enrollmentID | Int | 11 | none | none | enrollmentID cannot be duplicated | enrollmentID can't be change once it is created and must be unique | previous value plus 1 | enrollmentID in enrollment table must match the enrollmentID in subject table | teacher |
| student_studentID | Int | 11 | none | none | none | none | previous value plus 1 | student_studentID in enrollment table must match studentID in student table | teacher |
| class_classID | Int | 11 | none | none | none | none | previous value plus 1 | class_classID in enrollment table must match classID in class table | teacher |
</br>

table name: expertise</br>
primary key: expertiseID</br>
foreign key: teacher_teacherID |
			 subject_subjectID</br>
database name: joseRizalDB

| name | data type | filed size | unit of measurement | coding | data integrity rules | maintenance controls | formula | referential integrity | ownership |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| expertiseID | Int | 11 | none | none | expertiseID cannot be duplicated | expertiseID can't be change once it is created and must be unique | previous value plus 1 | none | guidance clerk |
| teacher_teacherID | Int | 11 | none | none | none | none | previous value plus 1 | teacher_teacherID in expertise table must match in teacherID in teacher tabler | guidance clerk |
| subject_subjectID | Int | 11 | none | none | none | none | previous value plus 1 | subject_subjectID in expertise table must match in subjectID in subject table |
</br>

table name: assign</br>
primary key: assignID</br>
foreign key: teacher_teacherID |
			 subject_subjectID |
			 class_classID</br>
database name: joseRizalDB

| name | data type | filed size | unit of measurement | coding | data integrity rules | maintenance controls | formula | referential integrity | ownership |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| expertiseID | Int | 11 | none | none | assignID cannot be duplicated | assignID can't change once it is created and must be unique | previous value plus 1 | none | guidance clerk |
| teacher_teacherID | Int | 11 | none | none | none | none | previous value plus 1 | teacher_teacherID in assign table must match in teacherID in teacher table | guidance clerk |
| subject_subjectID | Int | 11 | none | none | none | none | previous value plus 1 | subject_subjectID in assign table must match in subjectID in subject table | guidance clerk |
| class_classID | Int | 11 | none | none | none | none | previous value plus 1 | class_classID in assign table must match in classID in class table | guidance clerk |
</br>

table name: user</br>
primary key: userID</br>
foreign key: none</br>
database name: joseRizalDB

| name | data type | filed size | unit of measurement | coding | data integrity rules | maintenance controls | formula | referential integrity | ownership |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| userID | Int | 11 | none | none | userID cannot be duplicated | userID can't change once it is created and must be unique | previous value plus 1 | none | guidance clerk |
| username | Varchar | 100 | none | none | none | none | none | none | guidance clerk |
| password | Varchar | 100 | none | none | none | none | none | none | guidance clerk |
| loginType | Varchar | 100 | none | none | none | none | none | none | guidance clerk |














