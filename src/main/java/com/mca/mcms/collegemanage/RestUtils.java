package com.mca.mcms.collegemanage;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

import java.net.URLEncoder;
import java.nio.charset.Charset;
import java.util.HashMap;
import java.util.Map;

public final class RestUtils {

    private RestUtils() {}

    public static String buildRequestParams(String url, Map<String, Object> params) {
        var builder = new StringBuilder(url+"?");
        int size = params.size();
        for (Map.Entry<String, Object> entry: params.entrySet()) {
            size -= 1;
            builder.append(String.format("%s=%s", entry.getKey(), URLEncoder.encode(entry.getValue().toString(), Charset.defaultCharset())));
            if (size > 0) builder.append("&");
        }
        return builder.toString();
    }

    public static ResponseEntity<?> bindingErrors(BindingResult bindingResult) {
        HashMap<String, String> errors = new HashMap<>();
        for (FieldError objectError : bindingResult.getFieldErrors()) {
            errors.put(objectError.getField(), objectError.getDefaultMessage());
        }
        return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(errors);
    }

}
