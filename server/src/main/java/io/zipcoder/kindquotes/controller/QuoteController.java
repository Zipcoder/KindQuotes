package io.zipcoder.kindquotes.controller;

import io.zipcoder.kindquotes.model.Quote;
import io.zipcoder.kindquotes.repository.QuoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import java.net.URI;

@RequestMapping("/quotes")
@RestController
@CrossOrigin("http://localhost:8100")
public class QuoteController {

    @Autowired
    QuoteRepository quoteRepository;

    @RequestMapping("/")
    public ResponseEntity<Iterable<Quote>> getAllQuotes(){
        return new ResponseEntity<>(quoteRepository.findAll(), HttpStatus.OK);
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public ResponseEntity<Quote> addQuote(@RequestBody Quote quote){
        HttpHeaders responseHeaders = new HttpHeaders();
        URI newPollUri = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(quote.getID())
                .toUri();
        responseHeaders.setLocation(newPollUri);
        return new ResponseEntity<Quote>(quoteRepository.save(quote), HttpStatus.OK);
    }

    @RequestMapping("/{id}/")
    public ResponseEntity<Quote> getQuote(@PathVariable long id) {
        return new ResponseEntity<Quote>(quoteRepository.findOne(id), HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}/", method = RequestMethod.PUT)
    public ResponseEntity<Quote> updateQuote(@PathVariable long id, @RequestBody Quote quote) {
        return new ResponseEntity<Quote>(quoteRepository.save(quote), HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}/", method = RequestMethod.DELETE)
    public ResponseEntity<Quote> deleteQuote(@PathVariable long id) {
        quoteRepository.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }


}
