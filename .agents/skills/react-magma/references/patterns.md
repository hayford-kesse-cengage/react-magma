# React Magma Compound Component Patterns

Code examples for compound components and common patterns. All imports from `react-magma-dom` unless noted.

## App Root Setup

Every React Magma app must wrap its root:

```tsx
import { ThemeContext, magma, GlobalStyles } from 'react-magma-dom';

function App({ children }) {
  return (
    <ThemeContext.Provider value={magma}>
      <GlobalStyles />
      {children}
    </ThemeContext.Provider>
  );
}
```

## Table

```tsx
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeaderCell,
  TableCell,
} from 'react-magma-dom';

function UsersTable() {
  return (
    <Table tableTitle="Users" hasOutsideBorder>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
          <TableHeaderCell>Role</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Jane Doe</TableCell>
          <TableCell>jane@example.com</TableCell>
          <TableCell>Admin</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>John Smith</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>Editor</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
```

## Tabs

```tsx
import {
  TabsContainer,
  Tabs,
  Tab,
  TabPanelsContainer,
  TabPanel,
} from 'react-magma-dom';

function SettingsTabs() {
  return (
    <TabsContainer>
      <Tabs aria-label="Settings">
        <Tab>Profile</Tab>
        <Tab>Security</Tab>
        <Tab>Notifications</Tab>
      </Tabs>
      <TabPanelsContainer>
        <TabPanel>
          <p>Profile settings content</p>
        </TabPanel>
        <TabPanel>
          <p>Security settings content</p>
        </TabPanel>
        <TabPanel>
          <p>Notification preferences content</p>
        </TabPanel>
      </TabPanelsContainer>
    </TabsContainer>
  );
}
```

## Dropdown

```tsx
import {
  Dropdown,
  DropdownButton,
  DropdownContent,
  DropdownMenuItem,
  DropdownDivider,
  DropdownHeader,
} from 'react-magma-dom';

function ActionsDropdown() {
  return (
    <Dropdown>
      <DropdownButton>Actions</DropdownButton>
      <DropdownContent>
        <DropdownHeader>File Actions</DropdownHeader>
        <DropdownMenuItem onClick={() => console.log('edit')}>
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => console.log('duplicate')}>
          Duplicate
        </DropdownMenuItem>
        <DropdownDivider />
        <DropdownMenuItem onClick={() => console.log('delete')}>
          Delete
        </DropdownMenuItem>
      </DropdownContent>
    </Dropdown>
  );
}
```

## Form with Validation

```tsx
import React from 'react';
import {
  Form,
  Input,
  Select,
  Button,
  ButtonType,
  ButtonColor,
  ButtonGroup,
  Spacer,
} from 'react-magma-dom';

function ContactForm() {
  const [name, setName] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Form
      onSubmit={handleSubmit}
      header="Contact Us"
      actions={
        <ButtonGroup>
          <Button color={ButtonColor.subtle}>Cancel</Button>
          <Button type={ButtonType.submit}>Submit</Button>
        </ButtonGroup>
      }
    >
      <>
        <Input
          labelText="Full Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <Spacer size={12} />
        <Select
          labelText="Subject"
          items={[
            { label: 'General Inquiry', value: 'general' },
            { label: 'Support', value: 'support' },
            { label: 'Feedback', value: 'feedback' },
          ]}
        />
      </>
    </Form>
  );
}
```

## Accordion

```tsx
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from 'react-magma-dom';

function FAQAccordion() {
  return (
    <Accordion isMulti>
      <AccordionItem>
        <h3>
          <AccordionButton>What is React Magma?</AccordionButton>
        </h3>
        <AccordionPanel>
          React Magma is Cengage's accessible React component library.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h3>
          <AccordionButton>How do I install it?</AccordionButton>
        </h3>
        <AccordionPanel>
          Install via npm: npm install react-magma-dom
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
```

## Card

```tsx
import { Card, CardBody, CardHeading } from 'react-magma-dom';

function FeatureCard() {
  return (
    <Card>
      <CardBody>
        <CardHeading>Accessibility Built In</CardHeading>
        All components are WCAG 2.1 AA compliant with proper ARIA attributes,
        keyboard navigation, and screen reader support.
      </CardBody>
    </Card>
  );
}
```

## Popover

```tsx
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverFooter,
  Button,
} from 'react-magma-dom';

function InfoPopover() {
  return (
    <Popover>
      <PopoverTrigger>More Info</PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <div>Details</div>
        </PopoverHeader>
        <div>Additional information about this feature.</div>
        <PopoverFooter>
          <Button>Learn More</Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
}
```

## Modal

```tsx
import React from 'react';
import { Modal, ModalSize, Button } from 'react-magma-dom';

function ConfirmModal() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal
        header="Confirm Action"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        size={ModalSize.small}
      >
        <p>Are you sure you want to proceed?</p>
      </Modal>
    </>
  );
}
```

## Toast Notifications

```tsx
import React from 'react';
import { ToastsContainer, Toast, Button } from 'react-magma-dom';

function AppWithToasts() {
  const [showToast, setShowToast] = React.useState(false);

  return (
    <ToastsContainer>
      <Button onClick={() => setShowToast(true)}>Show Toast</Button>
      {showToast && (
        <Toast onDismiss={() => setShowToast(false)}>
          Changes saved successfully.
        </Toast>
      )}
    </ToastsContainer>
  );
}
```

## Dark Mode with isInverse

```tsx
import { Card, CardBody, Heading, Paragraph } from 'react-magma-dom';

function DarkSection() {
  return (
    <Card isInverse>
      <CardBody>
        <Heading isInverse level={2}>Dark Mode Section</Heading>
        <Paragraph isInverse>
          Content automatically adapts to inverse colors.
        </Paragraph>
      </CardBody>
    </Card>
  );
}
```

## Custom Styled Component

```tsx
import { styled, magma } from 'react-magma-dom';

const StyledCard = styled.div`
  background: ${props => props.theme.colors.neutral200};
  padding: ${props => props.theme.spaceScale.spacing06};
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid ${props => props.theme.colors.border};
`;
```

## I18n Override

```tsx
import { I18nContext, defaultI18n } from 'react-magma-dom';

const spanishI18n = {
  ...defaultI18n,
  locale: 'es',
  pagination: {
    ...defaultI18n.pagination,
    nextButtonLabel: 'Siguiente',
    previousButtonLabel: 'Anterior',
  },
};

function SpanishApp({ children }) {
  return (
    <I18nContext.Provider value={spanishI18n}>
      {children}
    </I18nContext.Provider>
  );
}
```

## Stepper

```tsx
import { Stepper, Step } from 'react-magma-dom';

function CheckoutStepper() {
  return (
    <Stepper currentStep={1} ariaLabel="Checkout progress">
      <Step label="Cart" />
      <Step label="Shipping" />
      <Step label="Payment" />
      <Step label="Confirmation" />
    </Stepper>
  );
}
```

## TreeView

```tsx
import { TreeView, TreeItem } from 'react-magma-dom';

function FileTree() {
  return (
    <TreeView ariaLabel="File browser">
      <TreeItem label="src" itemId="src">
        <TreeItem label="components" itemId="components">
          <TreeItem label="Button.tsx" itemId="button" />
          <TreeItem label="Input.tsx" itemId="input" />
        </TreeItem>
        <TreeItem label="index.ts" itemId="index" />
      </TreeItem>
    </TreeView>
  );
}
```

## Breadcrumb

```tsx
import { Breadcrumb, BreadcrumbItem } from 'react-magma-dom';

function PageBreadcrumb() {
  return (
    <Breadcrumb>
      <BreadcrumbItem to="/">Home</BreadcrumbItem>
      <BreadcrumbItem to="/products">Products</BreadcrumbItem>
      <BreadcrumbItem>Current Page</BreadcrumbItem>
    </Breadcrumb>
  );
}
```

## Drawer

```tsx
import React from 'react';
import { Drawer, DrawerPosition, Button } from 'react-magma-dom';

function SideDrawer() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
      <Drawer
        header="Settings"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        position={DrawerPosition.right}
      >
        <p>Drawer content here.</p>
      </Drawer>
    </>
  );
}
```
