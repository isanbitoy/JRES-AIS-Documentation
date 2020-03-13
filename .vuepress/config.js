module.exports = {
	title: 'System Analysis and Design Project',
	description: 'Compiled Documentation of Jose Rizal Academic System',
	themeConfig: {
		sidebar: [
			{
				title: 'Organization',
				path: '/organization/',
				children: [
					['/organization/current_business_activity', 'Current Business Activity'],
					['/organization/identified_problems', 'Identified Problems']
				]
			},
			{
				title: 'Proposed System',
				children: [
					['/the_proposed_system/objectives', 'Objectives']
				]
			},
			{
				title: 'Data Flow Diagrams',
				children: [
					['/data_flow_diagram/DFD_diagrams', 'DFD Diagrams']
				]
			},
			{
				title: 'Use Case Description',
				children: [
					['/use_case_description/enrollment_system', 'Enrollment System'],
					['/use_case_description/profiling_system', 'Profiling System'],
					['/use_case_description/grading_system', 'Grading System'],
					['/use_case_description/class_mgt_system', 'Class Management System'],
					['/use_case_description/subject_mgt_system', 'Subject Management System']
				]
			},
			{
				title: 'Database Design',
				children: [
					['/database_design/database_dictionary', 'Database Dictionary'],
					['/database_design/database_capacity', 'Database Capacity']
				]
			},
			{
				title: 'UI Design',
				path: '/ui_design/'
			}
		]
	}
}