package com.jhipster.app.service.mapper;

import com.jhipster.app.domain.Category;
import com.jhipster.app.service.dto.CategoryDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Category} and its DTO {@link CategoryDTO}.
 */
@Mapper(componentModel = "spring")
public interface CategoryMapper extends EntityMapper<CategoryDTO, Category> {}
