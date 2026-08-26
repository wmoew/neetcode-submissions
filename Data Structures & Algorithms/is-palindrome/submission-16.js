class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isPalindrome(s) {
        const isAlnum = (code) =>
            (code >= 48 && code <= 57) ||   // 0-9
            (code >= 65 && code <= 90) ||   // A-Z
            (code >= 97 && code <= 122);    // a-z

        let l = 0, r = s.length - 1;

        while (l < r) {
            let cl = s.charCodeAt(l);
            let cr = s.charCodeAt(r);

            if (!isAlnum(cl)) { l++; continue; }
            if (!isAlnum(cr)) { r--; continue; }

            // normalize to lowercase (bit trick works since both ranges are ASCII letters)
            const nl = cl >= 65 && cl <= 90 ? cl | 32 : cl;
            const nr = cr >= 65 && cr <= 90 ? cr | 32 : cr;

            if (nl !== nr) return false;

            l++;
            r--;
        }
        return true;
    }
}
