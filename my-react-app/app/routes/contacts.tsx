import { resolve } from "path";
import type { Route } from "./+types/home";
import { useState, type FormEvent } from "react";

interface FormError{
  name?:string;
  email?:string;
  message?:string;
}


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Контакты!" },
    { name: "description", content: "Контакты!" },
  ];
}

export default function Contacts() {
 // return <h1>Контакты!</h1>;
 const [formData, setformData] = useState({
  name:"",
  email:"",
  message:"",
 })

 const [errors, setErrors] = useState<FormError>({});
 const [isSubmiting, setIsSubmiting] = useState(false);
 const [submitAccess, setSubmitAccess] = useState(false);

 const validateForm = () => {
    const newError: FormError ={};

    if (!formData.name.trim() && !/^[a-zA-Zа-яА-Я\s'-]/.test(formData.name) && formData.name.length < 2){
        newError.name= 'Имя должно быть >= 2 символов и использовать латиницу или цифры';
    }
    if (!formData.email.trim() && !/\S+@\S+\.\S+/.test(formData.email)){
      newError.email= 'Некорректный формат email';
    } 

    if (!formData.message.trim()){
      newError.message= 'Сообщение не может быть пустрым';
    } 
    setErrors(newError);
    return Object.keys(newError).length === 0;
  };
    
    const handleSubmit = async (e: FormEvent) => {
      e.preventDefault();
      if (!validateForm()) return;
      
      setIsSubmiting(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setSubmitAccess(true);
        setformData({  name:"",email:"",message:"",})
      } catch(error){
          console.log("Ошибка отправки формы: ", error)
      } finally { 
          setIsSubmiting(false);
      }
    };
      return (
          <div>
            <h1>Связаться с нами</h1>
            <div>
              Сообщение отправлено!
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Имя</label>
                <input type = "text" id="name"/>
                {errors.name && (
                  <p>{errors.name}</p>
                )}
                </div>
                <div>
                <label htmlFor="email">Email</label>
                <input type = "email" id="email"/>
                </div>
                <div>
                <label htmlFor="message">Сообщение</label>
                <input type = "text" id="message"/>                
              </div>
              <div>
                <button type="submit">Отправить</button>
              </div>
            </form>
          </div>
      );

    
}