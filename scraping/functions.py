def getting_subjects_degrees(driver, By, target_array, subjects_names_fields, subject_degree_field_id_without_index, subject_degree_before_compassion_field_id_without_index):
  for index, subject_name_field in enumerate(subjects_names_fields):

    # Subject Name text
    subject_name_field_text = subject_name_field.text

    # Subject Degree Field
    subject_degree_field = driver.find_element(By.ID, f"{subject_degree_field_id_without_index}{index}")
    subject_degree_field_text = subject_degree_field.text


    # ##########################################################################################
    # # Doing this beacause not all students degrees have a "Before Compassion Subject Degree" #
    # #             If Selenium doesn't found the element it will return an error              #
    # ##########################################################################################
    try:
      # Subject Degree Before Compassion (al-ra'fa) Field
      subject_degree_before_compassion_field = driver.find_element(By.ID, f"{subject_degree_before_compassion_field_id_without_index}{index}")
      subject_degree_before_compassion_field_text = subject_degree_before_compassion_field.text
    except:
      subject_degree_before_compassion_field_text = ''


    # Adding Data to regular_subjects
    target_array.append({
      "subject_name": subject_name_field_text,
      "subject_degree": subject_degree_field_text,
      "subject_degree_before_compassion": subject_degree_before_compassion_field_text
    })
