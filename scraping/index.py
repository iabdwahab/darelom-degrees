from selenium import webdriver
from selenium.webdriver.common.by import By
from functions import getting_subjects_degrees

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

getting_subjects_degrees(driver, By, regular_subjects, regular_subjects_names_fields, 'ContentPlaceHolder1_gridTerm1_lblgrade_', 'ContentPlaceHolder1_gridTerm1_lblbefore_')

# Getting Takhallofat Subjects
takhallofat_subjects = []
takhallofat_subjects_names_fields = driver.find_elements(By.CSS_SELECTOR, '[id^="ContentPlaceHolder1_gridLast_Label3_"]')

getting_subjects_degrees(driver, By, takhallofat_subjects, takhallofat_subjects_names_fields, 'ContentPlaceHolder1_gridLast_lblgrade_', 'ContentPlaceHolder1_gridLast_lblbefore_')
