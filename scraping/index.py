from selenium import webdriver
from selenium.webdriver.common.by import By

# Starting Driver
driver = webdriver.Chrome()
driver.get("http://results.cu.edu.eg/DarOlom/login.aspx")

# Filling seatnumber_field
seatnumber_field = driver.find_element(By.ID, 'ContentPlaceHolder1_UserCode')
seatnumber_field.clear()
seatnumber_field.send_keys('10001')

# Login to Student Degrees Page
login_button = driver.find_element(By.ID, 'ContentPlaceHolder1_LoginButton')
login_button.click()

# Getting student_name
name_field = driver.find_element(By.ID, 'ContentPlaceHolder1_lblName')
student_name = name_field.text

# Getting Regular Subjects
regular_subjects = [] # [{ subject_name: "", subject_degree: "", subject_degree_before_compassion: "" }, ...]
regular_subjects_names_fields = driver.find_elements(By.CSS_SELECTOR, '[id^="ContentPlaceHolder1_gridTerm1_Label3_"]')

for index, regular_subject_name_field in enumerate(regular_subjects_names_fields):

  # Subject Name text
  regular_subject_name_field_text = regular_subject_name_field.text

  # Subject Degree Field
  regular_subject_degree_field = driver.find_element(By.ID, f"ContentPlaceHolder1_gridTerm1_lblgrade_{index}")
  regular_subject_degree_field_text = regular_subject_degree_field.text


  # ##########################################################################################
  # # Doing this beacause not all students degrees have a "Before Compassion Subject Degree" #
  # #             If Selenium doesn't found the element it will return an error              #
  # ##########################################################################################
  try:
    # Subject Degree Before Compassion (al-ra'fa) Field
    regular_subject_degree_before_compassion_field = driver.find_element(By.ID, f"ContentPlaceHolder1_gridTerm1_lblbefore_{index}")
    regular_subject_degree_before_compassion_field_text = regular_subject_degree_before_compassion_field.text
  except:
    regular_subject_degree_before_compassion_field_text = ''


  # Adding Data to regular_subjects
  regular_subjects.append({
    "subject_name": regular_subject_name_field_text,
    "subject_degree": regular_subject_degree_field_text,
    "subject_degree_before_compassion": regular_subject_degree_before_compassion_field_text
  })