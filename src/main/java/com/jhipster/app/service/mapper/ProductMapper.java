package com.jhipster.app.service.mapper;

import com.jhipster.app.domain.Category;
import com.jhipster.app.domain.Product;
import com.jhipster.app.service.dto.CategoryDTO;
import com.jhipster.app.service.dto.ProductDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Product} and its DTO {@link ProductDTO}.
 */
@Mapper(componentModel = "spring")
public interface ProductMapper extends EntityMapper<ProductDTO, Product> {
    @Mapping(target = "category", source = "category", qualifiedByName = "categoryCategoryName")
    ProductDTO toDto(Product s);

    @Named("categoryCategoryName")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    @Mapping(target = "categoryName", source = "categoryName")
    CategoryDTO toDtoCategoryCategoryName(Category category);
}
