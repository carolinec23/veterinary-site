import React, { useState, useReducer } from 'react';
import "../scss/components/_form.scss";

const formReducer = (state, event) => {
    if (event.reset) {
        return {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
    }

    return {
      ...state,
      [event.name]: event.value
    }
}

const Form = () => {
    const [submitting, setSubmitting] = useState(false);
    const [formData, setFormData] = useReducer(formReducer, {});

    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true);

        setTimeout(() => {
            setSubmitting(false);
            setFormData({reset: true});
          }, 2000)    
    }

    const handleChange = event => {
        setFormData({
          name: event.target.name,
          value: event.target.value,
        });
    }

    return (
        <div className="form__container">
            {submitting &&
                <div>Submitting Form...</div>
            }
            <form onSubmit={handleSubmit}>
                <fieldset disabled={submitting}>
                    <div className="form__wrapper">
                        <input 
                            type="text" 
                            name="name" 
                            required 
                            onChange={handleChange} 
                            placeholder="Full Name" 
                            value={formData.name || ''}
                        />
                        <input 
                            type="email" 
                            name="email" 
                            required 
                            onChange={handleChange}
                            placeholder="Email" 
                            value={formData.email || ''}
                        />
                        <input 
                        type="subject" 
                        name="subject"
                        onChange={handleChange}
                        placeholder="Subject"  
                        value={formData.subject || ''}
                        />
                    </div>
                    <div className="form__wrapper">
                        <textarea 
                            type="message" 
                            name="message" 
                            required 
                            onChange={handleChange} 
                            placeholder="Message" 
                            value={formData.message || ''}
                        />
                    </div>
                </fieldset>
                <button className="form__button" type="submit" disabled={submitting}>Send Message</button>
            </form>
        </div>
    )
}

export default Form;
