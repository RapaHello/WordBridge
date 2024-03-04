package com.rapa.user.web.member.domain;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class JoinForm {
    @NotEmpty
    @Pattern(regexp = "^(?=.*[a-z])(?=.*\\d)[a-z\\d]{6,15}$", message = "아이디 형식을 확인해 주세요.")
    private String id;          // 아이디

    @NotEmpty
    @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#%^&*])[A-Za-z\\d!@#%^&*]{8,20}$", message = "비밀번호 형식을 확인해 주세요.")
    private String password;    // 비밀번호

    @NotEmpty
    @Pattern(regexp = "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}$", message = "이메일 형식을 확인해 주세요.")
    private String email;       // 이메일

    @NotEmpty
    @Pattern(regexp = "^[가-힣]{2,6}$", message = "이름 형식을 확인해 주세요.")
    private String name;        // 이름

    @NotEmpty
    @Pattern(regexp = "^\\d{3}-\\d{4}-\\d{4}$", message = "핸드폰 번호 형식을 확인해 주세요.")
    private String phone;       // 핸드폰 번호

    @NotEmpty
    private String address1;    // 기본 주소

    @NotEmpty
    private String address2;    // 상세 주소

    @NotEmpty
    private String authority;   // 권한
}
