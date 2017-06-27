package io.zipcoder.kindquotes.controller;

import io.zipcoder.kindquotes.model.Quote;
import io.zipcoder.kindquotes.repository.QuoteRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import javax.persistence.EntityManagerFactory;

import java.util.ArrayList;

@RequestMapping("/quotes")
@RestController
@CrossOrigin("http://localhost:8100")
public class QuoteController {

    @Inject
    private QuoteRepository quoteRepository;


    @RequestMapping("/")
    public ResponseEntity<Iterable<Quote>> getAllQuotes() {
        Iterable<Quote> quotes = quoteRepository.findAll();
        return new ResponseEntity<>(quotes, HttpStatus.OK);
    }

    @RequestMapping("/{id}")
    public ResponseEntity<Quote> getOne(@PathVariable Long id) {
        Quote quote = quoteRepository.findOne(id);
        return new ResponseEntity<>(quote, HttpStatus.OK);
    }

    @RequestMapping(value="/newQuote", method=RequestMethod.POST)
    public ResponseEntity<?> addQuote(@RequestBody Quote quote) {
        quote = quoteRepository.save(quote);
        return new ResponseEntity<>(quote, HttpStatus.ACCEPTED);
    }

    @RequestMapping(value="/{id}", method=RequestMethod.DELETE)
    public ResponseEntity<?> deleteQuote(@PathVariable Long id) {
        quoteRepository.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @RequestMapping(value="/{id}", method=RequestMethod.PUT)
    public ResponseEntity<?> updateQuote(@RequestBody Quote quote) {
        Quote updated = quoteRepository.save(quote);
        return new ResponseEntity<Object>(updated, HttpStatus.OK);
    }




}
