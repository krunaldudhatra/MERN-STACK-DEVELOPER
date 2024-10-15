
function main(email) {
    let result = "";

    let atIndex = email.indexOf('@');
    let dotIndex = email.lastIndexOf('.');

    let hasAt = atIndex > 0;
    let hasDot = dotIndex > atIndex + 1;
    let has3CharsBeforeAt = atIndex >= 3;
    let hasValidLength = email.length > dotIndex + 1;

    if (hasAt && hasDot && has3CharsBeforeAt && hasValidLength) {
        result = email "is valid";
    } else {
        result = "invalid email";
    }

    return result;
}

