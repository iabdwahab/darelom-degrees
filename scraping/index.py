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