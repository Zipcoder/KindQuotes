package io.zipcoder.kindquotes.repository;


import io.zipcoder.kindquotes.model.Quote;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

public interface QuoteRepository extends CrudRepository<Quote, Long> {
}