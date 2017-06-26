package io.zipcoder.kindquotes.model;

import javax.persistence.*;

@Entity
public class Quote {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "QUOTE_ID")
    private long id;

    @Column(name = "QUOTE_MESSAGE")
    private String string;

    public Quote () {}

    public Quote(String msg){
        this.string = msg;
    }

    public String getMessage() {
        return string;
    }

    public void setMessage(String messages) {
        this.string = messages;
    }

    public long getID() { return id; }

    public void setID(long id) {this.id = id;}

}
