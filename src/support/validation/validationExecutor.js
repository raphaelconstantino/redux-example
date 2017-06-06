import {SubmissionError} from 'redux-form'

export const rulesRunner = (field, name, ...validations) => {
    return (state) => {
        for (let v of validations) {
            let property = field.split('.').reduce((o, i) => o ? o[i] : "", state);
            let errorMessageFunc = v(property, state);
            if (errorMessageFunc) 
            {
                return {[field]: errorMessageFunc(name)};
            }
        }
        return null;
    };
}

export const run = (state, runners) => {
    
    let errors = runners.reduce((memo, runner) => {
        return Object.assign(memo, runner(state));
    }, {});

    if (Object.keys(errors).length) {

        throw new SubmissionError(errors)
    }

};