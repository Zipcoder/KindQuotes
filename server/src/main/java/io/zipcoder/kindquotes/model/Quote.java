package io.zipcoder.kindquotes.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Quote {

    @Id
    @GeneratedValue
    @Column(name = "QUOTE_ID")
    private long id;

    @Column(name = "QUOTE_MESSAGE")
    private String message;

    public Quote () { this.message = "default"; }

    public Quote(String msg){
        this.message = msg;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public long getID() { return id; }

    public void setID(long id) {this.id = id;}

}
