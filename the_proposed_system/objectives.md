## A. Main Objectives

- To develop a faster and organize processes on the enrollment system.
- To minimize manual data profiling.
- To create a consistent student and teacher profile in Jose Rizal Elem. school

## B. Project Scope

- #### Enrollment System
	* A secure authentication process where only a designated faculty member can gain access to the system.
	* Creating a class/section process wherein students, adviser, and subject teacher will be assigned.
	* Adding, edit, update, and delete student information as well as modifying student status particularly on assigning and reassigning student to another class.
- #### Profiling System
	* A secure authentication process where only registrar can gain access.
	* Assign, edit, update and delete student informaton and status.
	* Add, assign, edit, update and delete teacher informaton and status.
	* Add, assign, edit, update and delete subjects.
	* A feature where the registrar can print a list students of the school.
- #### Grading System
	* A secure authentication process where subject teachers and advisers can gain access.
	* A feature where the teacher can add, edit, update and delete student grades and
	student's quarterly attendance record.
	* After a teacher input the necessary informaton, the system prints the grade and the
	atendance record of the student.

## C. Technical Functionality

- Enrolling new, old, transferee students and storing teaching options choices.
- Handling admission process.
- Handling records of examination, assessments, marks, grades, and academic progression.
- Maintaining records of absences and attendance.
- Providing statistical reports.

## D. Proposed Business Activities

- #### New Student/Transferee
	* A student/parent approach a teacher that has been assigned in a specific grade level.
	* The teacher will input the necessary information of the student to the system.
	* After filling up information, the teacher will add and evaluate the student for sectioning, then submit the previous report card to validate the enrollment.
	* If the student is transferee, he/she must submit necessary files and report card from the previous school.
	* On the first day of class, the student will look for the designated section and the class adviser will check and verify the master class list. Clarification and changes will be made if there any wrong information given.
	* Lastly, the class adviser updates and submit the master class list to the registrar.
- #### Old Students
	* The previous advisor checks the student status in the system. If a student fail to attain the standard general avergae of the school, they will be advise to take summer class. If the student fail again, they will be oblige to take the class next year.
	* The previous adviser updates and edit student profile that are eligible to move on the next school year. The list will be forwarded to the new adviser that will handle the class for the next school year.
	* On the first day of class, the students will look for their designated sections.
	* Lastly, the new adviser will check and verify the class list and submit to the registrar.
- #### Late Enrollee
	* a student/parent approach a teacher that has been assigned in a specific grade level.
	* The teacher will input necessary information of the student to the system.
	* The teacher will evaluate the student for sectioning if he/she is eligible to take the current grade level.
	* The teacher will add the enrollee and update the class list in the system.
- #### Profiling System 
	* The registrar/teacher access the student information in the system.
	* The registrar add a teacher in the system.
	* The registrar/teacher add a subject in the system.
	* The registrar modifies student information if there are any necessary changes.
	* The registrar modifies teacher information if there are any necessary changes.
	* The registrar modifies subject information if there are any necessary changes.
- #### Grading System
	* The teacher input the score/grades of the student in the software.
	* The teacher/subject teacher submit the computed grade to the advisor of the students.
	* The advisor provides a report card and quarterly attendance record for every student by printing soft copies from the software.
	* The class adviser will submit the grades and attendance record of the students to the registrar.
	* The registrar records the grade to the student profiling system.
- #### Class Management System
	* The registrar will verify the list of enrolled students. 
	* The registrar creates a class in the system.
	* The registrar will assign student to a specific section.
	* After the creation of section, registrar will assign teacher to a subject in each class advisory.
	* The registrar modify class details if there are any changes in the current class.
	* Lastly, registrar will give the adviser a class list.

## E. Event List

- #### Guidance Clerk
	* Admin/school staff sign-in the system.
	* Accepts checks and save all school data.
	* Save the changes done.
	* Admin/school staff sign-out.
- #### Principal
	* Principal sign-in to the system.
	* Can add new subject.
	* Can assign subject to a teacher.
	* Can assign subject to a speciic class.
	* Print assign subject list.
	* Principal sing-out grom the system.
- #### Teacher
	* Teacher sign-in to the system.
	* Can populate the student and teacher record.
	* Can assign and reassign a student to a secton.
	* Teacher populate grade and student’s attendance before the grading period ends.
	* Teacher check if there is wrong in the student's grade queries.
	* Can edit student grades.
	* The period grade will be calculated.
	* Teacher sign-out from the system.
- #### Adviser
	* Class adviser sign-in to the system.
	* Can view advisory class grade.
	* Class adviser print advisory class grade.
	* Adviser sign-out from the system.

## F. Event Tables

- #### Enrollment System

| Event | Trigger | Source | Use Case | Response | Destination |
| :---: |  :---:  | :---:  |  :---:   |  :---:   |    :---:    |
|student give requirements | student information | entity: student | accept student requirements | student information | entity: teacher |
| teacher verify student's requirements | student status information | entity: teacher | verify student previous information record | verify old student status details, verify new student details, student deficient requirements | store: student list |
| student lack enrollment requirements | student deficient requirements | store: student list | update student requirement table | updated student record | store: student list |
| teacher update old student records | verify old student records | store: student list | update old student academic records | update student profile | store: student list |
| teacher add new records to new/transferee student | verify new/transferee student records | store: student list | register new/transferee student | new/transferee student profile | store: student list |

- #### Profiling System 

| Event | Trigger | Source | Use Case | Response | Destination |
| :---: |  :---:  | :---:  |  :---:   |  :---:   |    :---:    |
| guidance clerk access student records | student information | entity: guidance clerk | access student information | new student profile | store: student list |
| guidance clerk add new teacher | new teacher information | entity: guidance clerk | add new teacher | new teacher profile | store: teacher list |
| guidance clerk modify student records | requested student information | store: student list | modify student information | updated student profile | store: student list |
| guidance clerk modify teacher records | requested teacher information | store: teacher list | modify teacher information | updated teacher profile | store: teacher list |
| guidance clerk print list of student and teacher records | student/teacher profile | store: student/teacher list | print student/teacher list | student/teacher list | entity: guidance clerk |

- #### Grading System

| Event | Trigger | Source | Use Case | Response | Destination |
| :---: |  :---:  | :---:  |  :---:   |  :---:   |    :---:    |
| teacher input student grades in the system | quarterly grades and deportment record | entity: subject teacher | input student grades/deportment details | student grade and deportment detail | store: grade list |
| adviser evaluate student grades | student grade and deportment detail | entity: class adviser | evaluate student grade and deportment record | evaluated student grade/deportment record | store: grade list |
| teacher mark student with fail status | failed grade | store: grade list | print failed students | failed status list | entity: class adviser |
| teacher mark student with honor status | obtained grade | store: grade list | print honor candidates | honor status list | entity: class adviser |
| adviser print list of grades | report profile | store: grade list | print class grade list | class grade report | entity: class adviser |
| adviser print grade & deportment record of each student | student grade profile | store: grade list | print student grade and deportment record | student grade/deportment record | entity: class adviser |

- #### Class Management System 

| Event | Trigger | Source | Use Case | Response | Destination |
| :---: |  :---:  | :---:  |  :---:   |  :---:   |    :---:    |
| verify enrolled students | student information | store: student list | view student records | enrolled student information | entity: guindace clerk |
|  guidance clerk creates a class in the system | new class records | entity: guidance clerk | create new class | new class profile | store: class list |
| guidance clerk will assign student to a section | student details | store: student list | assign student to a class | assigned student | store: class list |
| Guidance clerk assign teacher to a class | teacher details | store: teacher list | assign teacher to a class | assigned teacher | store: class list |
| guidance modify class details | new class detail | entity: guidance clerk | modify class list | updated class information | store: class list |
| guidance print class/section list | class profile | store: class list | print class/section list | class/section list | entity: adviser |

- #### Subject Management System

| Event | Trigger | Source | Use Case | Response | Destination |
| :---: |  :---:  | :---:  |  :---:   |  :---:   |    :---:    |
| principal add new subject | mandated subject | entity: principal | add subject | subject information | store: subject list |
| principal modify subject descripton | new subject details | entity: principal | modify subject details | updated subject details | store: subject list |
| principal assing subject to teacher | new subject | store: subject list | assign subject to teacher | subject assigned | store: teacher list |
| principal assign subject to a class | new subject | store: subject list | assign subject to class | subject assigned | store: class list |
| principal prints report of assigned subjects | subject profile | store: subject list | generate assigned subject list | assigned subject list | entity: teacher |




