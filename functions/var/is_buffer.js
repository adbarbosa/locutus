function is_buffer (vr) {
    // +   original by: Brett Zamir
    // *     example 1: is_buffer('This could be binary or a regular string as far as JavaScript knows...');
    // *     returns 1: true
    return typeof vr === 'string';
}