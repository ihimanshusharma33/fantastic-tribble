# Project Overview
This project is a web application with a structured component-based architecture, ensuring a clean and modular UI design.

## UI and Component Interaction
The application consists of multiple pages, components, and a centralized state management system. Below is an explanation of how the UI components interact within the project.

### Folder Structure
```
src/
├─ components/
│  └─ Navigation.tsx
├─ pages/
│  ├─ Contact.tsx
│  ├─ CreateStrategy.tsx
│  ├─ Dashboard.tsx
│  ├─ Documentation.tsx
│  ├─ Features.tsx
│  ├─ History.tsx
│  ├─ Home.tsx
│  ├─ Pricing.tsx
│  └─ Stimulate.tsx
├─ store/
│  ├─ store.ts
│  └─ strategySlice.ts
├─ types/
│  └─ strategy.ts
├─ App.tsx
├─ index.css
├─ main.tsx
└─ vite-env.d.ts
```

### Assumption
- All the data in the Application is Hardcoded and in During change with respecitve useeffect for the performance
- At this point of time only few Routes are aviable and site is not fully function
- Avialable Routes
                <Route path="/create" element={<CreateStrategy />} />
                <Route path="/history" element={<History />} />
                <Route path="/features" element={<Features />} />
                <Route path="/documentation" element={<Documentation />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/contact" element={<Contact />} />
                <Route path='/stimulate' element={<Stimulate />} />
                <Route path="/dashboard" element={<Dashboard />} />

### UI Components
- **Navigation (`components/Navigation.tsx`)**
  - This component serves as the primary navigation bar.
  - Appears on all pages, allowing users to switch between sections.

### Pages (`pages/`)
Each file inside the `pages/` folder represents a different page of the application:

- **Home (`Home.tsx`)**: Landing page displaying an overview of the application.
- **Dashboard (`Dashboard.tsx`)**: Provides an overview of user data, strategies, and insights.
- **Create Strategy (`CreateStrategy.tsx`)**: Allows users to create and configure strategies.
- **Stimulate (`Stimulate.tsx`)**: Likely used for testing and running strategies.
- **History (`History.tsx`)**: Displays past strategies and their results.
- **Features (`Features.tsx`)**: Highlights the application's key functionalities.
- **Pricing (`Pricing.tsx`)**: Shows subscription plans or pricing details.
- **Documentation (`Documentation.tsx`)**: Provides guides and reference materials for users.
- **Contact (`Contact.tsx`)**: Includes a contact form for user inquiries.

### State Management (`store/`)
- **`store.ts`**: Configures the global Redux store.
- **`strategySlice.ts`**: Handles state related to strategies, allowing pages like `CreateStrategy.tsx` and `History.tsx` to interact with the stored data.

### Type Definitions (`types/`)
- **`strategy.ts`**: Defines TypeScript types for strategies, ensuring type safety across the app.

### Root Files
- **`App.tsx`**: The main application component where routing and layout are managed.
- **`index.css`**: Contains global styles for consistent UI design.
- **`main.tsx`**: Entry point where the React application is initialized.
- **`vite-env.d.ts`**: Provides TypeScript environment configurations for Vite.


