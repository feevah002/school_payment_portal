
class Validate_department_Data{
  validate_onPost(input){
    const valid_data = input
    input.dept_name = input.dept_name.toLowerCase()
    input.duration = input.duration.toLowerCase()
    return valid_data
  }
  validate_onGet(input){
    const valid_data = input.toLowerCase()
    return valid_data
  }
  validate_onPut(input){
    input = input.toLowerCase()
    return valid_data
  }
  validate_onDelete(input){
    input = input.toLowerCase()
    return valid_data
  }
}

class Validate_user_Data{
  validate_onRegister(input){
    const valid_data = input
    input.username = input.username.toLowerCase()
    input.department = input.department.toLowerCase()
    return valid_data
  }
  validate_onGet(input){
    input = input.toLowerCase()
    return valid_data
  }
  validate_onPut(input){
    input = input.toLowerCase()
    return valid_data
  }
  validate_onDelete(input){
    input = input.toLowerCase()
    return valid_data
  }
}
class Validate_dues_create_Data{
  validate_onPost(input){
    const valid_data = input
    input.title = input.title.split(' ').join('-')
    input.department_to_pay = new Set([input.department_to_pay])
    input.department_to_pay = Array.from(input.department_to_pay)
    return valid_data
  }
  validate_onGet(input){
    input = input.toLowerCase()
    return valid_data
  }
  validate_onPut(input){
    input = input.toLowerCase()
    return valid_data
  }
  validate_onDelete(input){
    input = input.toLowerCase()
    return valid_data
  }
}

class Validate_dues_pay_Data{
  validate_onPost(input){
    const valid_data = input
    input.username = input.username.toLowerCase()
    return valid_data
  }
  validate_onGet(input){
    input = input.toLowerCase()
    return valid_data
  }
  validate_onPut(input){
    input = input.toLowerCase()
    return valid_data
  }
  validate_onDelete(input){
    input = input.toLowerCase()
    return valid_data
  }
}
class Validate_tuition_pay_Data{
  validate_onPost(input){
    const valid_data = input
    return valid_data
  }
  validate_onGet(input){
    input = input.toLowerCase()
    return valid_data
  }
  validate_onPut(input){
    input = input.toLowerCase()
    return valid_data
  }
  validate_onDelete(input){
    input = input.toLowerCase()
    return valid_data
  }
}

const dept_validate = new Validate_department_Data()
const user_validate = new Validate_user_Data()
const dues_pay_validate = new Validate_dues_pay_Data()
const tuition_pay_validate = new Validate_tuition_pay_Data()
const due_create_validate = new Validate_dues_create_Data()

module.exports = { dept_validate, user_validate, dues_pay_validate,tuition_pay_validate, due_create_validate }
