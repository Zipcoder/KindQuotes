package io.zipcoder.kindquotes.model;


import javax.persistence.*;

@Entity
public class Quote {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name="ID")
    private Long id;

    @Column(name="MESSAGE")
    private String message;

    public Quote() {

    }

    public Quote(String msg){
        this.message = msg;
    }

    public String getMessage() {
        return message;
    }

    public Long getId() {
        return id;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
