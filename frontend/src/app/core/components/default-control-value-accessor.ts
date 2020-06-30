import {AbstractControl, ControlValueAccessor, FormGroup, ValidationErrors, Validator} from '@angular/forms';

export class DefaultControlValueAccessor implements ControlValueAccessor , Validator{
    private onTouched: any;
    form: FormGroup;

    registerOnChange(fn: any): void {
        this.form.valueChanges.subscribe(fn);
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    registerOnValidatorChange(fn: () => void): void {
    }

    setDisabledState(isDisabled: boolean): void {
        isDisabled ? this.form.disable() : this.form.enable();
    }

    validate(control: AbstractControl): ValidationErrors | null {
        return this.form.valid ? null : {invalidForm: {valid: false, message: "O endereço é inválido"}};
    }

    writeValue(obj: any): void {
        obj && this.form.setValue(obj, {emitEvent: false});
    }


}
