from selenium import webdriver
from selenium.webdriver.common.by import By
from functions import getting_subjects_degrees
import json

with open("data.json", "r", encoding="utf-8") as file:
  data_json_file = json.load(file)

# Starting Driver
driver = webdriver.Chrome()

login_url = "http://results.cu.edu.eg/DarOlom/login.aspx"
driver.get(login_url)

for student_seatnumber in range(10001, 19999):

  # Adding a check for URL of the login page
  if (driver.current_url != login_url):
    driver.get(login_url)

  # Filling seatnumber_field
  seatnumber_field = driver.find_element(By.ID, 'ContentPlaceHolder1_UserCode')
  seatnumber_field.clear()
  seatnumber_field.send_keys(f'{student_seatnumber}')

  # Login to Student Degrees Page
  login_button = driver.find_element(By.ID, 'ContentPlaceHolder1_LoginButton')
  login_button.click()


  # If the student didn't found; continue to try the next student_seatnumber
  try:
    # Getting student_name
    name_field = driver.find_element(By.ID, 'ContentPlaceHolder1_lblName')
    student_name = name_field.text
  except:
    continue

  # Getting Regular Subjects
  regular_subjects = [] # [{ subject_name: "", subject_degree: "", subject_degree_before_compassion: "" }, ...]
  regular_subjects_names_fields = driver.find_elements(By.CSS_SELECTOR, '[id^="ContentPlaceHolder1_gridTerm1_Label3_"]')

  getting_subjects_degrees(driver, By, regular_subjects, regular_subjects_names_fields, 'ContentPlaceHolder1_gridTerm1_lblgrade_', 'ContentPlaceHolder1_gridTerm1_lblbefore_')

  # Getting Takhallofat Subjects
  takhallofat_subjects = []
  takhallofat_subjects_names_fields = driver.find_elements(By.CSS_SELECTOR, '[id^="ContentPlaceHolder1_gridLast_Label3_"]')

  getting_subjects_degrees(driver, By, takhallofat_subjects, takhallofat_subjects_names_fields, 'ContentPlaceHolder1_gridLast_lblgrade_', 'ContentPlaceHolder1_gridLast_lblbefore_')


  # Getting student_totalgrade
  # ##########################################################################################
  # #             When the degrees is blocked; totalgrade_field don't appear                 #
  # ##########################################################################################
  try:
    totalgrade_field = driver.find_element(By.ID, 'ContentPlaceHolder1_lbltotalGrade')
    student_totalgrade = totalgrade_field.text
  except:
    student_totalgrade = 'حجب'


  student_data = {
    "student_name": student_name,
    "student_seatnumber": student_seatnumber,
    "student_totalgrade": student_totalgrade,
    "student_degrees": regular_subjects,
    "student_takhallofat_degrees": takhallofat_subjects,
  }

  # Write the data on data.json file with the new student who added
  data_json_file.append(student_data)
  with open("data.json", "w", encoding="utf-8") as file:
    json.dump(data_json_file, file, ensure_ascii=False, indent=2)

  # Getting the whole degrees html page
  degrees_html_source = driver.page_source
  # Create a HTML file with the seatnumber of the student and append data to it
  with open(f"./students_pages/{student_seatnumber}.html", "w", encoding="utf-8") as file:
    file.write(degrees_html_source)

  driver.back()