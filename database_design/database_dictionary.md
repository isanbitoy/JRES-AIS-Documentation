### Entities

| entity name or label | alternative name or alias | description | input data flows | output data flows |
| :------------------: | :-----------------------: | :---------: | :--------------: | :---------------: |
| adviser | none | assigned teacher to oversee a class for managing students, creating class report | failed student list, honor status list, dection grade report, student grade and deportment records | none |
| guidance clerk | none | profile student and teacher, manage class and report student current status | student/teacher list, enrolled student information | student information, new teacher information, new class detail, new class information |
| principal | none | supervise and facilitate daily operation of the school | none | mandated subject, new subject details |
| student | none | provides necessary information | none | student information |
| teacher | none | handles subject and provides performance report for each student | student information, </br> assigned subject list | student status information,</br> quarterly grade and deportment records |
#### Legend
- #### entity name or label: the entity name as it appears on DFDs
- #### alternative name or alias: aliases for entity name
- #### description: describes the entity and its purpose
- #### input data flows: the standard DFD names for the input data flows to the entity
- #### output data flows: the standard DFD names for the data flows leaving the entity
</br>

### Data Flows

| data flow name | alternative name | description | origin | destination | volume and frequency |
| :------------: | :--------------: | :---------: | :----: | :---------: | :------------------: |
| assigned student | none | assigned student class information to be stored in class database | assign student to a class | class list | 1-2 per student in a year |
| assigned subject list | none | created printed report of teacher's assigned subject | generate assigned subject list | teacher | 1-2 per subject teacher in a year |
| assigned teacher | none | teacher's assigned class information to be stored in class database | assign teacher to a class | class list | 1-2 per subject teacher in a year |
| class/section list | none | printed report of class list information | print class/section list | adviser | 1-2 per class adviser in a year |
| class profile | none | retrieve clas profile values | class list | print class/section list | 1-2 per class adviser in a year |
| enrolled student information | none | provide currently enrolled student | view student information | guidance clerk | 1-2 per school year |
| evaluated student grade and deportment card | none | evaluate the student's academic output | evaluate student grade and deportment record | grade list | 4-5 per student in school year |
| failed grade | none | retrieve student failed grade for printing | grade list | print failed students | 0-10 per student in school year |
| failed student list | none | create report of failed students | print failed students | adviser | 0-10 per student in school year |
| honor status list | none | mark student honor candidates | print honor candidates | adviser | 0-1 per student in school year |
| mandated subject | none | mandated subject to be added in school curriculum | principal | add subject | 0-11 per grade level in school year |
| new class detail | none | new class information to be updated to intended class | guidance clerk | modify class | 0-18 or 0-25 in a school year |
| new class information | none | newly added/created class information | guidance clerk | class list | 0-18 or 0-25 in a school year |
| new student profile | none | updated/viewed student information and store any updated values | access/modify student information | student list | 0-3 per student in a school year |
| new/transferee student | none | new registered new/transferee student profile | register new/transferee student | student list | 1 per new/transferee in a school year |
| new class profile | none | newly created class to be stored in class list | create new class | class list | 0-18 or 0-25 in a school year |
| new subject | none | retrieved newly added subject | subject list | modify subject details | 0-11 per grade level in a school year |
| new subject details | none | new mandated subject details to AIS(academic information system) | principal | add subject | 0-11 per grade level in a school year |
| new teacher information | none | received teacher information | guidance clerk | add new teacher | 0-5 per year |
| new teacher profile | none | new teacher profile | add new teacher | teacher list | 0-5 per year |
| obtained grade | none | list of student sorted grade score to be printed | grade list | prnt honor candidates | 0-1 student in a school year |
| quarterly grade and deportment card | none | quarterly student's performance report to AIS(Academic Information System) | teacher | input student grade and deportment record | 4 per student in a school year |
| report profile | none | retrieved student grade form the database | grade list | print section grade list | 1-5 per class (30 - 50 student grades) in a school year |
| requested student information | none | student profile entry from student database | student list | update/edit student information | 0-1 per student in a school year |
| requested teacher information | none | teacher profile entry from the teacher list database | teacher list | update/edit teacher information | 0-1 per teacher in a year |
| section grade report | none | value of grades of student in the class | print section list | adviser | 1-5 per class (30 - 50 student grades) in a school year |
| student/teacher list | none | printed student/teacher profile | print student and teacher list | guidance clerk | 1-2 per year with 20-30 teacher entries and 300-500 student entries |
| student deficient requirements | none | verified student previous information record | verifies students previous information record | student list | 1-2 per enrollee on enrollment period |
| student details | none | retrieve student information from database | student list | assign student to a class | 1-2 per student in a school year |
| student grade and deportment details | none | retrieved values of student grade and deportment record | grade list | evaluate student grade and deportment record | 4-5 per student in a school year |
| student grade and deportment reports | none | printed values of student grade and deportment record | print student grade and deportment record | adviser | 4 per student in a school year |
| student grade profile | none | retrieved student grade profile from grade database | grade list | print student grade and deportment record | 4 per student in a school year |
| student information | none | received student information and requirements form the enrollee | student | accpets student information/requirements | 1 per enrollee during enrollment period |
| student information | none | validated student information and requirements input given by the enrollee | accpets student information/requirements | teacher | 1 per enrollee during enrollment |
| student profile | none | retrieved student profile from student database | student list | print student and teacher list | 1-2 per year with 300-500 student entries |
| student status information | none | retrieved student profile values for student status verification | teacher | verify students previous information record | 1 per student entry during enrollment period |
| subject assigned | none | information of the assigned subject for the teacher to be stored | assign subject to a teacher | teacher list | 0-11 subjects per teacher in a school year |
| subject information | none | information of newly added subject | add subject | subject list | 0-11 subjects per grade level in a year |
| subject profile | none | retrieved teacher assigned subject | subject list | generate assigned subject | 1-2 per teacher in a school year |
| teacher details | none | retrieved teacher information values from the teacher database | teacher list | assign teacher to a class | 0-1 per year with 0-18 or 0-25 class entries |
| teacher profile | none | retrieved teacher profile values form the teacher database | teacher list | print student and teacher list | 1-2 per year with 20-30 teacher entries |
| update class information | none | modified class details to be stored in class database | modify class list | class list | 0-1 per class in a year |
| updated old student profile | none | changes update of old student profile values | update old student academic status | student list | 1 per currently enrolled old student in a school year |
| updated student requirements table | none | changes update of student enrollment requirements table | update student requirements table | student list | 1-2 per student in a school year |
| updated subject details | none | modify subject details to be store | modify subject details | subject lsit | 0-11 per grade level in a school year |
| updated teacher profile | none | changes update of teacher information values | update/edit teacher information | teacher list | 0-1 per teacher in a year |
| verified old student status details | none | validated old student previous information entry | verify students previous information record | student list | 1 per currently enrolled old student |
| verified old student status details | none | retrieved verified old student status information from student database | student list | update old student academic status | 1 per currently enrolled old student during enrollment |
| verified new student status | none | validated new student submitted information and requirements | verify student previous information record | student list | 1 per currently enrolled new student during enrollment |
| verified new/transferee student status details | none | retrieved new/transferee student status information to be added as a new student | student list | register new/transferee student | 1 per currently enrolled new/transferee student during enrollment |
#### Legend
- #### data flow name or label: the data flow name as it appears on DFDs
- #### alternative name or alias: aliases for DFD data flow name
- #### description: describes the data flow and its purpose
- #### origin: DFD beginning, or source, for data flow, the origin can be a process, data store
- #### destination: DFD ending points for the data flow; the destination can be a process, a data store
- #### volume and frequency: describes the expected number of occurences for the data flow per unit of time
</br>

### Data Stores

| data store name | alternative name | description | attributes | volume and frequency |
| :-------------: | :--------------: | :---------: | :--------: | :------------------: |
| student list | none | store and update personal student information | verified old student status,</br> verified new student details,</br> student deficient requirement list | 300-500 student records</br> 300-600 record changes per year |
| teacher list | none | store and update teachers information, teachers assigned subject, teachers assigned class | new teacher profile,</br> updated teacher profile,</br> requested teacher information,</br> teacher profile | 20-30 teacher records</br> 25-35 record changes per year |
| class list | none | update and store class details, class profile, and new class entry | new class profile,</br> updated class information,</br> assigned student,</br> assigned teacher,</br> assigned subject | 18-25 class records per year</br> 340-540 records changes per year |
| grade list | none | store and update student grade and deportment records | student grade and deportment details,</br> evaluated student grade and deportment record | 10-12 grade records per student</br> 40-48 grade records changes per student in a year |
| subject list | none | update and store subject details/profile | subject information,</br> updated subject details,</br> new subject,</br> subject profile | 60-65 subject records</br> 5-10 records changes per year |
#### Legend
- #### data store name or label: the data store name as it appears on DFDs
- #### alternative name or alias: aliases for DFD data store name
- #### description: describes the data store and its purpose
- #### attributes: standard DFD names that enter or leave data store
- #### destination: DFD ending points for the data store; the destination can be a process, a data store
- #### volume and frequency: describes the expected number of occurences for the data store per unit of time
</br>

### Processes

| 		|		 		|		|
| :---: | :---: | :---: | :---: |
| 1.1 | accept student information/records | student information | student information |
| 1.2 | verify student previous information | student status information | verify old/new student status details |
| 1.3 | update student requirement table | student deficient requirement list | updated student requirement table |
| 1.4 | update old student academic status | verified old student status details | updated old student profile |
| 1.5 | register new/transferee student | verified new/transferee student status details | new/transferee student profile |
| 2.1 | access/modify student information | student information | new student profile |
| 2.2 | add new teacher | new teacher information | new teacher profile |
| 2.3 | update/edit student information | requested student information | updated student profile |
| 2.4 | update/edit teacher information | requested teacher inforamtion | updated teacher profile |
| 2.5 | print student ans teacher list | student, teacher profile | student/teacher list |
| 3.1 | input student grades and deportment records | quarterly grade and deportment records | student grade and deportment details |
| 3.2 | evaluate student grade and deportment record | student grade and deportment details | evaluated student grade and deportment record |
| 3.3 | print failed students | failed grade | failed student list |
| 3.4 | print honor students | obtained high grade | honor student list |
| 3.5 | print section list | report profile | section grade report |
| 3.6 | print student grade and deportment record | student grade profile | student grade and deportment record |
| 4.1 | view student information | student information | enrolled student information |
| 4.2 | create new class | new class information | new class profile |
| 4.3 | assign student to a class | student details | assigned student |
| 4.4 | assign teacher to a class | teacher details | assigned teacher |
| 4.5 | modify class list | new class detail | updated class information |
| 4.6 | print class/section list | class profile | class/section list |
| 5.1 | add subject | mandated subject | subject information |
| 5.2 | modify subject details | new subject details | updated subject details |
| 5.3 | assign subject to a teacher | new subject | subject assigned |
| 5.4 | assign subject to a class | new subject | subject assigned |
| 5.5 | generate assigned subject list | subject profile | assigned subject list |

