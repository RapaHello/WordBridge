package com.rapa.core.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MemberEntity {
    private Long seq;           // 일련번호
    private String id;          // 아이디
    private String password;    // 비밀번호
    private String email;       // 이메일
    private String name;        // 이름
    private String phone;       // 핸드폰 번호
    private String address1;    // 기본 주소
    private String address2;    // 상세 주소
    private String authority;   // 권한

    public MemberEntity(Builder builder) {
        this.seq = builder.seq;
        this.id = builder.id;
        this.password = builder.password;
        this.email = builder.email;
        this.name = builder.name;
        this.phone = builder.phone;
        this.address1 = builder.address1;
        this.address2 = builder.address2;
        this.authority = builder.authority;
    }

    public static class Builder {
        private Long seq;
        private String id;
        private String password;
        private String email;
        private String name;
        private String phone;
        private String address1;
        private String address2;
        private String authority;

        public Builder setSeq(Long seq) {
            this.seq = seq;
            return this;
        }

        public Builder setId(String id) {
            this.id = id;
            return this;
        }

        public Builder setPassword(String password) {
            this.password = password;
            return this;
        }

        public Builder setEmail(String email) {
            this.email = email;
            return this;
        }

        public Builder setName(String name) {
            this.name = name;
            return this;
        }

        public Builder setPhone(String phone) {
            this.phone = phone;
            return this;
        }

        public Builder setAddress1(String address1) {
            this.address1 = address1;
            return this;
        }

        public Builder setAddress2(String address2) {
            this.address2 = address2;
            return this;
        }

        public Builder setAuthority(String authority) {
            this.authority = authority;
            return this;
        }

        public MemberEntity build() {
            return new MemberEntity(this);
        }
    }
}
