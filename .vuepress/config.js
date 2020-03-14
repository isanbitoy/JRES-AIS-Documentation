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
					['/data_flow_diagram/context_diagram', 'Context Diagram'],
					['/data_flow_diagram/diagram_0', 'Diagram 0'],
					['/data_flow_diagram/lower_level_diagram', 'Lower-Level Diagram'],
					['/data_flow_diagram/use_case_diagram', 'Use Case Diagram']
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
				children: [
					['/ui_design/mdi_form', 'MDI Form'],
					['/ui_design/module_1', 'Module 1'],
					['/ui_design/module_2', 'Module 2'],
					['/ui_design/module_3', 'Module 3'],
					['/ui_design/printed_outputs', 'Printed Outputs']
				]
			}
		]
	}
}