import React from "react";
import { useTranslation } from "react-i18next";
import {
  Button,
  ButtonVariant,
  EmptyState,
  EmptyStateBody,
  Form,
  InputGroup,
  TextInput,
  Title,
} from "@patternfly/react-core";
import { SearchIcon } from "@patternfly/react-icons";
import { useForm } from "react-hook-form";
import { useHistory, useRouteMatch } from "react-router-dom";

type SearchUserProps = {
  onSearch: (search: string) => void;
};

export const SearchUser = ({ onSearch }: SearchUserProps) => {
  const { t } = useTranslation("users");
  const { register, handleSubmit } = useForm<{ search: string }>();
  const { url } = useRouteMatch();
  const history = useHistory();

  const goToCreate = () => history.push(`${url}/add-user`);

  return (
    <EmptyState>
      <Title headingLevel="h4" size="lg">
        {t("startBySearchingAUser")}
      </Title>
      <EmptyStateBody>
        <Form onSubmit={handleSubmit((form) => onSearch(form.search))}>
          <InputGroup>
            <TextInput
              type="text"
              id="kc-user-search"
              name="search"
              ref={register()}
            />
            <Button
              variant={ButtonVariant.control}
              aria-label={t("common:search")}
              type="submit"
            >
              <SearchIcon />
            </Button>
          </InputGroup>
        </Form>
      </EmptyStateBody>
      <Button variant="link" onClick={goToCreate}>
        {t("createNewUser")}
      </Button>
    </EmptyState>
  );
};
