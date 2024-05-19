package com.felix.dhbw.library2.repository;



import com.felix.dhbw.library2.model.Book;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface BookRepository extends MongoRepository<Book, String> {
    // Use the findAll() method to retrieve all books from the collection
    List<Book> findAll();
}
